<?php

    namespace App\Http\Controllers;

    use App\Enum\CreditSafeUrlEnum\CreditSafeUrl;
    use App\Http\Requests\StoreAziendeRequest;
    use App\Http\Requests\UpdateAziendeRequest;
    use App\Models\Aziende;
    use Illuminate\Database\Eloquent\Casts\Json;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    use Inertia\Inertia;
    use Inertia\Response;

    class AziendeController extends Controller
    {
        public string $key;

        public function __construct()
        {
            $this->key = $this->creditSaveToken();
        }

        /**
         * Display a listing of the resource.
         *
         * @return Response
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
         * @param null $request
         *
         * @return Response
         */
        public function create($request = null): Response
        {
            if ($request !== null) {
                try {
                    $result_first = $request['value_company'];
                } catch (\Throwable) {
                    $result_first = [];
                }

                try {
                    $array_second = $request['value_credit'];
                } catch (\Throwable) {
                    $array_second = [];
                }

                $result[] = [
                    'correlationId'                => $result_first->correlationId,
                    "id"                           => $result_first->companies[0]->id,
                    "country"                      => $result_first->companies[0]->country,
                    "regNo"                        => $result_first->companies[0]->regNo,
                    "safeNo"                       => $result_first->companies[0]->safeNo,
                    "name"                         => $result_first->companies[0]->name,
                    "type"                         => $result_first->companies[0]->type,
                    "simpleValue"                  => $result_first->companies[0]->address->simpleValue,
                    "street"                       => $result_first->companies[0]->address->street,
                    "city"                         => $result_first->companies[0]->address->city,
                    "postCode"                     => $result_first->companies[0]->address->postCode,
                    "province"                     => $result_first->companies[0]->address->postCode,
                    "houseNo"                      => $result_first->companies[0]->address->houseNo,
                    "phoneNumbers"                 => $result_first->companies[0]->phoneNumbers[0],
                    'activityCode'                 => $result_first->companies[0]->activityCode,
                    'status'                       => $result_first->companies[0]->status,
                    'credit_rating_value'          => $array_second->report->creditScore->currentCreditRating->commonValue,
                    'credit_rating_description'    => $array_second->report->creditScore->currentCreditRating->commonDescription,
                    'credit_rating_limit_value'    => $array_second->report->creditScore->currentCreditRating->creditLimit->value,
                    'credit_rating_limit_currency' => $array_second->report->creditScore->currentCreditRating->creditLimit->currency,
                    'credit_rating_provider_value' => $array_second->report->creditScore->currentCreditRating->providerValue->value,
                ];


                return Inertia::render('AziendeCreate', [
                    'aziende' => $result,
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
            dd($request);
            $vat_no        = $request->request->get('vatNO');
            $full_name     = $request->request->get('fullName');
            $phone_numbers = $request->request->get('phoneNumbers');
            $post_code     = $request->request->get('postCode');
            $province      = $request->request->get('province');
            $city          = $request->request->get('city');
            $country       = $request->request->get('country');
            $house_no      = $request->request->get('houseNo');
            $reg_no        = $request->request->get('regNo');
            $safe_no       = $request->request->get('safeNo');
            $simple_value  = $request->request->get('simpleValue');
            $status        = $request->request->get('status');
            $activityCode  = $request->request->get('activityCode');
            $correlationId = $request->request->get('correlationId');
            $id            = $request->request->get('id');

            $credit_rating_value       = $request->request->get('$credit_rating_value');
            $credit_rating_description = $request->request->get('credit_rating_description');
            $credit_rating_limit_value    = $request->request->get('credit_rating_limit_value');
            $credit_rating_limit_currency = $request->request->get('credit_rating_limit_currency');
            $credit_rating_provider_value = $request->request->get('credit_rating_provider_value');


            DB::table('aziendes')->insert([
                'correlation_id'      => $correlationId,
                'id_company_received' => $id,
                'country'             => $country,
                'reg_no'              => $reg_no,
                'vat_no'              => $vat_no,
                'safe_no'             => $safe_no,
                'name'                => $full_name,
                'address_complete'    => $simple_value,
                'address_simple'      => $simple_value,
                'city'                => $city,
                'postal_code'         => $post_code,
                'province'            => $province,
                'house_number'        => $house_no,
                'type_azienda'        => 'Booh',
                'phone_number'        => $phone_numbers,
                'activity_code'       => $activityCode,
                'created_at'          => now()
            ]);

            return redirect(route('aziende.index', absolute: false));
        }

        /**
         * Display the specified resource.
         */
        public function show(Aziende $aziende): Response
        {
            return Inertia::render('AziendeShow', [
                'aziende' => $aziende
            ]);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Aziende $aziende): Response
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
            try {
                $token = $this->key;
            } catch (\Throwable) {
                $this->key = $this->creditSaveToken();
            }

            $vatNo = $request->vatNO;

            $curl = curl_init();
            $link = '?page=1&countries=IT&vatNo=';

            curl_setopt_array($curl, array(
                CURLOPT_URL            => CreditSafeUrl::UrlCompaines->value . $link . $vatNo,
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

            curl_close($curl);
            $response = json_decode(curl_exec($curl));

            try {
                $result_company = $this->callCreditSafeServiceCompanies($response->companies[0]->id);
            } catch (\Throwable) {
                $result_company = [];
            }

            return $this->create(
                [
                    'value_company' => $response,
                    'value_credit'  => $result_company
                ]
            );
        }


        /**
         * @param string $id
         *
         * @return mixed
         */
        public function callCreditSafeServiceCompanies(?string $id): mixed
        {
            try {
                $token = $this->key;
            } catch (\Throwable) {
                $this->key = $this->creditSaveToken();
            }

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL            => 'https://connect.creditsafe.com/v1/companies/' . $id . '?language=it&template=Financial&includeIndicators=false',
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

            $response = curl_exec($curl);
            curl_close($curl);
            return json_decode($response);
        }


        /**
         * @return string
         */
        private function creditSaveToken(): string
        {
            $username     = $_ENV['CREDIT_SAFE_USERNAME'];
            $password     = $_ENV['CREDIT_SAFE_PASSWORD'];
            $url          = CreditSafeUrl::UrlAutenticazione->value;
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
