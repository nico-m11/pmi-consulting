<?php

    namespace App\Http\Controllers;

    use App\Http\Requests\StoreAziendeRequest;
    use App\Http\Requests\UpdateAziendeRequest;
    use App\Models\Aziende;
    use Illuminate\Database\Eloquent\Casts\Json;
    use Illuminate\Http\Request;
    use Inertia\Inertia;
    use Inertia\Response;

    class AziendeController extends Controller
    {
        private const  URL_AUTENTICATION = 'https://connect.creditsafe.com/v1/authenticate';

        /**
         * Display a listing of the resource.
         */
        public function index(): Response
        {
            $aziende = Aziende::all();

            return Inertia::render('Aziende', [
                'aziende' => Json::encode($aziende),
            ]);
        }

        /**
         * Show the form for creating a new resource.
         *
         * @param null $data
         *
         * @return Response
         */
        public function create($request = null)
        {
            $result = [];
            if ($request !== null) {
                try {
                    $array = $request->companies;
                } catch (\Throwable) {
                    $array = [];
                }
                foreach ($array as $value) {
                    $result[] = [
                        "id"           => $value->id,
                        "country"      => $value->country,
                        "regNo"        => $value->regNo,
                        "safeNo"       => $value->safeNo,
                        "name"         => $value->name,
                        "type"         => $value->type,
                        "simpleValue"  => $value->address->simpleValue,
                        "street"       => $value->address->street,
                        "city"         => $value->address->city,
                        "postCode"     => $value->address->postCode,
                        "province"     => $value->address->postCode,
                        "houseNo"      => $value->address->houseNo,
                        "phoneNumbers" => $value->phoneNumbers[0]
                    ];
                }
                return Inertia::render('AziendeCreate', [
                    'aziende' => $result
                ]);
            } else {
                return Inertia::render('AziendeCreate', [
                    'aziende' => null
                ]);
            }
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreAziendeRequest $request)
        {
            //
        }

        /**
         * Display the specified resource.
         */
        public function show(Aziende $aziende)
        {
            return Inertia::render('AziendeShow', [
                'aziende' => $aziende
            ]);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Aziende $aziende)
        {
            return Inertia::render(
                'AziendeEdit',
                [
                    'aziende' => $aziende
                ]
            );
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateAziendeRequest $request, Aziende $aziende)
        {
            //
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(Aziende $aziende)
        {
            //
        }

        /**
         * @param Request|null $request
         *
         * @return mixed
         */
        public function callCreditSafeService(?Request $request): mixed
        {
            $vatNo = $request->vatNO;
            $token = $this->creditSaveToken();
            $curl  = curl_init();
            $link  = 'https://connect.creditsafe.com/v1/companies?page=1&countries=IT&vatNo=';

            curl_setopt_array($curl, array(
                CURLOPT_URL            => $link . $vatNo,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING       => '',
                CURLOPT_MAXREDIRS      => 10,
                CURLOPT_TIMEOUT        => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST  => 'GET',
                CURLOPT_HTTPHEADER     => array(
                    "Authorization: Bearer $token"
                ),
            ));

            $response = json_decode(curl_exec($curl));

            curl_close($curl);
            return $this->create($response);
        }

        /**
         * @return string
         */
        private function creditSaveToken(): string
        {
            $username     = $_ENV['CREDIT_SAFE_USERNAME'];
            $password     = $_ENV['CREDIT_SAFE_PASSWORD'];
            $url          = self::URL_AUTENTICATION;
            $method       = 'POST';
            $json_prepare = json_encode(
                [
                    'username' => $username,
                    'password' => $password
                ]
            );

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL            => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING       => '',
                CURLOPT_MAXREDIRS      => 10,
                CURLOPT_TIMEOUT        => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST  => $method,
                CURLOPT_POSTFIELDS     => $json_prepare,
                CURLOPT_HTTPHEADER     => array(
                    'Content-Type: application/json'
                ),
            ));

            $response = json_decode(curl_exec($curl));
            curl_close($curl);
            return $response->token;
        }
    }
