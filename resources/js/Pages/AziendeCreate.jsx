import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import {useState} from 'react';

export default function create({auth, aziende}) {

    const [step, setStep] = useState(1);
    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    let id;
    let correlationId;
    let activityCode;
    let city;
    let country;
    let houseNo;
    let fullName;
    let phoneNumbers;
    let postCode;
    let province;
    let regNo;
    let safeNo;
    let simpleValue;

    let credit_rating_description;
    let credit_rating_limit_currency;
    let credit_rating_limit_value;
    let credit_rating_provider_value;
    let credit_rating_value;


    aziende?.map(({
                      activityCode: activityCode1,
                      correlationId: correlationId1,
                      city: city1,
                      country: country1,
                      houseNo: houseNo1,
                      id: id1,
                      name,
                      phoneNumbers: phoneNumbers1,
                      postCode: postCode1,
                      province: province1,
                      regNo: regNo1,
                      safeNo: safeNo1,
                      simpleValue: simpleValue1,

                      credit_rating_description: credit_rating_description1,
                      credit_rating_limit_currency: credit_rating_limit_currency1,
                      credit_rating_limit_value: credit_rating_limit_value1,
                      credit_rating_provider_value: credit_rating_provider_value1,
                      credit_rating_value: credit_rating_value1
                  }) => {
        return (
            activityCode = activityCode1,
                correlationId = correlationId1,
                id = id1,
                city = city1,
                country = country1,
                houseNo = houseNo1,
                fullName = name,
                phoneNumbers = phoneNumbers1,
                postCode = postCode1,
                province = province1,
                regNo = regNo1,
                safeNo = safeNo1,
                simpleValue = simpleValue1,

                credit_rating_description = credit_rating_description1,
                credit_rating_limit_currency = credit_rating_limit_currency1,
                credit_rating_limit_value = credit_rating_limit_value1,
                credit_rating_provider_value = credit_rating_provider_value1,
                credit_rating_value = credit_rating_value1
        );
    });

    const {data, setData, post, processing, errors} = useForm({
        vatNO: '',
        fullName: '',
        phoneNumbers: '',
        postCode: '',
        province: '',
        city: '',
        country: '',
        houseNo: '',
        regNo: '',
        safeNo: '',
        simpleValue: '',
        activityCode: '',
        correlationId: '',
        id: '',

        credit_rating_description: '',
        credit_rating_limit_currency: '',
        credit_rating_limit_value: '',
        credit_rating_provider_value: '',
        credit_rating_value: '',

        financingType: 'noleggio',

        request_noleggio:'',
        request_leasing:'',
        request_finanziamento:'',
    });
    const handleSubmitVatNo = (e) => {
        e.preventDefault();
        post('/azienda-create-2');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/aziende');
    };

    const handleFinancingTypeChange = (event) => {
        setData('financingType', event.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crea Azienda</h2>
                    <Link
                        href={route("aziende.index")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Indietro
                    </Link>
                </div>
            }
        >
            <Head title="Aziende"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                  onSubmit={handleSubmitVatNo}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="vatNo" value="Partita Iva "/>
                                    <TextInput
                                        id="vatNo"
                                        name="vatNo"
                                        value={data.vatNO}
                                        onChange={(e) => setData('vatNO', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="partita iva"
                                    />
                                    {errors.vatNO && <div className="text-red-600">{errors.vatNO}</div>}
                                </div>
                                {
                                    data.vatNO === '' ? (<>
                                    </>) : (<>
                                        {step === 1 && (
                                            <>
                                                <div
                                                    className="flex items-center justify-between col-span-1 sm:col-span-2">
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                        type="submit"
                                                        disabled={processing}
                                                    >
                                                        Auto Compila
                                                    </button>
                                                </div>
                                            </>
                                        )}

                                    </>)
                                }
                            </form>


                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <>
                                        {/*<div className="mb-4">*/}
                                        {/*    <InputLabel htmlFor="activityCode" value="activityCode"/>*/}
                                        <TextInput
                                            id="activityCode"
                                            name="activityCode"
                                            value={data.activityCode = activityCode}
                                            onChange={(e) => setData('activityCode', e.target.value)}
                                            type="text"
                                            className="mt-1 block w-full invisible"
                                            placeholder="activityCode"
                                        />
                                        {/*{errors.activityCode &&*/}
                                        {/*    <div className="text-red-600">{errors.activityCode}</div>}*/}
                                        {/*</div>*/}
                                        {/*<div className="mb-4">*/}
                                        {/*    <InputLabel htmlFor="correlationId" value="correlationId"/>*/}

                                        <TextInput
                                            hidden={true}
                                            id="correlationId"
                                            name="correlationId"
                                            value={data.correlationId = correlationId}
                                            onChange={(e) => setData('correlationId', e.target.value)}
                                            type="text"
                                            className="mt-1 block w-full invisible"
                                            placeholder="correlationId"
                                        />
                                        <div className="mb-4">
                                            <InputLabel htmlFor="id" value="id"/>
                                            <TextInput
                                                hidden={true}
                                                id="id"
                                                name="id"
                                                value={data.id = id}
                                                onChange={(e) => setData('id', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full:"
                                                placeholder="id"
                                            />
                                        </div>

                                        {errors.id &&
                                            <div className="text-red-600">{errors.id}</div>}
                                        {/*</div>*/}
                                        <div className="mb-4">
                                            <InputLabel htmlFor="fullName" value="Nome completo"/>
                                            <TextInput
                                                id="fullName"
                                                name="fullName"
                                                value={data.fullName = fullName}
                                                onChange={(e) => setData('fullName', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Nome completo"
                                            />
                                            {errors.fullName &&
                                                <div className="text-red-600">{errors.fullName}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="phoneNumbers" value="Numero di telefono"/>
                                            <TextInput
                                                id="phoneNumbers"
                                                name="phoneNumbers"
                                                value={data.phoneNumbers = phoneNumbers}
                                                onChange={(e) => setData('phoneNumbers', e.target.value)}
                                                type="tel"
                                                className="mt-1 block w-full"
                                                placeholder="Telefono"
                                            />
                                            {errors.phoneNumbers &&
                                                <div className="text-red-600">{errors.phoneNumbers}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="simpleValue" value="Indirizzo di residenza"/>
                                            <TextInput
                                                id="simpleValue"
                                                name="simpleValue"
                                                value={data.simpleValue = simpleValue}
                                                onChange={(e) => setData('simpleValue', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Indirizzo"
                                            />
                                            {errors.simpleValue &&
                                                <div className="text-red-600">{errors.simpleValue}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="postCode" value="Cap"/>
                                            <TextInput
                                                id="postCode"
                                                name="postCode"
                                                value={data.postCode = postCode}
                                                onChange={(e) => setData('postCode', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="cap"
                                            />
                                            {errors.postCode &&
                                                <div className="text-red-600">{errors.postCode}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="province" value="Provincia"/>
                                            <TextInput
                                                id="province"
                                                name="province"
                                                value={data.province = province}
                                                onChange={(e) => setData('province', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="provincia"
                                            />
                                            {errors.province &&
                                                <div className="text-red-600">{errors.province}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="city" value="Città"/>
                                            <TextInput
                                                id="city"
                                                name="city"
                                                value={data.city = city}
                                                onChange={(e) => setData('city', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="città"
                                            />
                                            {errors.city && <div className="text-red-600">{errors.city}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="country" value="Paese"/>
                                            <TextInput
                                                id="country"
                                                name="country"
                                                value={data.country = country}
                                                onChange={(e) => setData('country', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="paese"
                                            />
                                            {errors.country && <div className="text-red-600">{errors.country}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="houseNo" value="Numero Civico"/>
                                            <TextInput
                                                id="houseNo"
                                                name="houseNo"
                                                value={data.houseNo = houseNo}
                                                onChange={(e) => setData('houseNo', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="numero civico"
                                            />
                                            {errors.houseNo && <div className="text-red-600">{errors.houseNo}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="regNo" value="Numero di Registro"/>
                                            <TextInput
                                                id="regNo"
                                                name="regNo"
                                                value={data.regNo = regNo}
                                                onChange={(e) => setData('regNo', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="numero di registo"
                                            />
                                            {errors.regNo && <div className="text-red-600">{errors.regNo}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="safeNo" value="Numero Creditsafe"/>
                                            <TextInput
                                                id="safeNo"
                                                name="safeNo"
                                                value={data.safeNo = safeNo}
                                                onChange={(e) => setData('safeNo', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="numero creditsafe"
                                            />
                                            {errors.safeNo && <div className="text-red-600">{errors.safeNo}</div>}
                                        </div>
                                        <div className="flex items-center justify-between col-span-1 sm:col-span-2">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="button"
                                                onClick={handleNext}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </>
                                )}
                                {step === 2 && (
                                    <>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_description"
                                                        value="Livello Di Rischio"/>
                                            <TextInput
                                                id="credit_rating_description"
                                                name="credit_rating_description"
                                                value={data.credit_rating_description = credit_rating_description}
                                                onChange={(e) => setData('credit_rating_description', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="livello di Rischio"
                                            />
                                            {errors.credit_rating_description &&
                                                <div className="text-red-600">{errors.credit_rating_description}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_limit_currency"
                                                        value="Valuta "/>
                                            <TextInput
                                                id="credit_rating_limit_currency"
                                                name="credit_rating_limit_currency"
                                                value={data.credit_rating_limit_currency = credit_rating_limit_currency}
                                                onChange={(e) => setData('credit_rating_limit_currency', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="valuta"
                                            />
                                            {errors.credit_rating_limit_currency &&
                                                <div
                                                    className="text-red-600">{errors.credit_rating_limit_currency}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_limit_value"
                                                        value="Massimale"/>
                                            <TextInput
                                                id="credit_rating_limit_value"
                                                name="credit_rating_limit_value"
                                                value={data.credit_rating_limit_value = credit_rating_limit_value}
                                                onChange={(e) => setData('credit_rating_limit_value', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="credito disponibile"
                                            />
                                            {errors.credit_rating_limit_value &&
                                                <div
                                                    className="text-red-600">{errors.credit_rating_limit_value}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_provider_value"
                                                        value="Punteggio di Rating"/>
                                            <TextInput
                                                id="credit_rating_provider_value"
                                                name="credit_rating_provider_value"
                                                value={data.credit_rating_provider_value = credit_rating_provider_value}
                                                onChange={(e) => setData('credit_rating_provider_value', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="punteggio di rating"
                                            />
                                            {errors.credit_rating_provider_value &&
                                                <div
                                                    className="text-red-600">{errors.credit_rating_provider_value}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_value"
                                                        value="Categoria del Rating"/>
                                            <TextInput
                                                id="credit_rating_value"
                                                name="credit_rating_value"
                                                value={data.credit_rating_value = credit_rating_value}
                                                onChange={(e) => setData('credit_rating_value', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="categoria del rating"
                                            />
                                            {errors.credit_rating_value &&
                                                <div
                                                    className="text-red-600">{errors.credit_rating_value}</div>}
                                        </div>

                                        <div className="flex items-center justify-between col-span-1 sm:col-span-2">
                                            <button
                                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="button"
                                                onClick={handleBack}
                                            >
                                                Back
                                            </button>
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="button"
                                                onClick={handleNext}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </>
                                )}
                                {step === 3 && (
                                    <>
                                        {
                                            data.credit_rating_value === 'A' ? (
                                                <>
                                                    <div className="mb-4 col-span-1 sm:col-span-2">
                                                        <InputLabel value="Seleziona Tipo"/>
                                                        <div className="flex items-center">
                                                            <input
                                                                className="mr-2 leading-tight"
                                                                type="radio"
                                                                name="financingType"
                                                                value="finanziamento"
                                                                checked={data.financingType === 'finanziamento'}
                                                                onChange={handleFinancingTypeChange}
                                                            />
                                                            <span className="text-gray-700">Finanziamento</span>
                                                            <input
                                                                className="mr-2 leading-tight"
                                                                type="radio"
                                                                name="financingType"
                                                                value="leasing"
                                                                checked={data.financingType === 'leasing'}
                                                                onChange={handleFinancingTypeChange}
                                                            />
                                                            <span className="text-gray-700">Leasing</span>
                                                            <input
                                                                className="ml-4 mr-2 leading-tight"
                                                                type="radio"
                                                                name="financingType"
                                                                value="noleggio"
                                                                checked={data.financingType === 'noleggio'}
                                                                onChange={handleFinancingTypeChange}
                                                            />
                                                            <span className="text-gray-700">Noleggio</span>
                                                        </div>
                                                    </div>
                                                    {data.financingType === 'leasing' || data.financingType === 'noleggio' ? (
                                                            <>
                                                                <div className="mb-4">
                                                                    <InputLabel htmlFor="request_leasing"
                                                                                value="request_leasing"/>
                                                                    <textarea
                                                                        id="request_leasing"
                                                                        name="credit_rating_value"
                                                                        value={data.request_leasing}
                                                                        onChange={(e) => setData('request_leasing', e.target.value)}
                                                                        className="mt-1 block w-full"
                                                                        placeholder="request_leasing"
                                                                    />
                                                                    {errors.request_leasing &&
                                                                        <div
                                                                            className="text-red-600">{errors.request_leasing}</div>}
                                                                </div>
                                                            </>
                                                        ) :
                                                        (
                                                            <>
                                                                <div className="mb-4">
                                                                    <InputLabel htmlFor="request_finanziamento"
                                                                                value="request_finanziamento"/>
                                                                    <textarea
                                                                        id="request_finanziamento"
                                                                        name="request_finanziamento"
                                                                        value={data.request_finanziamento}
                                                                        onChange={(e) => setData('request_finanziamento', e.target.value)}
                                                                        className="mt-1 block w-full"
                                                                        placeholder="request_finanziamento"
                                                                    />
                                                                    {errors.request_finanziamento &&
                                                                        <div
                                                                            className="text-red-600">{errors.request_finanziamento}</div>}
                                                                </div>
                                                            </>
                                                        )}
                                                    <div
                                                        className="flex items-center justify-between col-span-1 sm:col-span-2">
                                                        <button
                                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                            type="button"
                                                            onClick={handleBack}
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                            type="submit"
                                                            disabled={processing}
                                                        >
                                                            Salva Azienda
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (<></>)
                                        }
                                        {
                                            data.credit_rating_value === 'B' ? (
                                                <>
                                                    <div className="mb-4 col-span-1 sm:col-span-2">
                                                        <InputLabel value="Seleziona Tipo"/>
                                                        <div className="flex items-center">
                                                            <input
                                                                className="mr-2 leading-tight"
                                                                type="radio"
                                                                name="financingType"
                                                                value="noleggio"
                                                                checked={data.financingType === 'noleggio'}
                                                                onChange={handleFinancingTypeChange}
                                                            />
                                                            <span className="text-gray-700">Noleggio</span>
                                                            <input
                                                                className="ml-4 mr-2 leading-tight"
                                                                type="radio"
                                                                name="financingType"
                                                                value="leasing"
                                                                checked={data.financingType === 'leasing'}
                                                                onChange={handleFinancingTypeChange}
                                                            />
                                                            <span className="text-gray-700">Leasing</span>
                                                        </div>
                                                    </div>
                                                    {data.financingType === 'noleggio' ? (
                                                            <>
                                                                <div className="mb-4">
                                                                    <InputLabel htmlFor="request_noleggio"
                                                                                value="request_noleggio"/>
                                                                    <textarea
                                                                        id="request_noleggio"
                                                                        name="request_noleggio"
                                                                        value={data.request_noleggio}
                                                                        onChange={(e) => setData('request_noleggio', e.target.value)}
                                                                        className="mt-1 block w-full"
                                                                        placeholder="request_noleggio"
                                                                    />
                                                                    {errors.request_noleggio &&
                                                                        <div
                                                                            className="text-red-600">{errors.request_noleggio}</div>}
                                                                </div>
                                                            </>
                                                        ) :
                                                        (
                                                            <>
                                                                <div className="mb-4">
                                                                    <InputLabel htmlFor="request_leasing"
                                                                                value="request_leasing"/>
                                                                    <textarea
                                                                        id="request_leasing"
                                                                        name="request_leasing"
                                                                        value={data.request_leasing}
                                                                        onChange={(e) => setData('request_leasing', e.target.value)}
                                                                        className="mt-1 block w-full"
                                                                        placeholder="request_leasing"
                                                                    />
                                                                    {errors.request_leasing &&
                                                                        <div
                                                                            className="text-red-600">{errors.request_leasing}</div>}
                                                                </div>
                                                            </>
                                                        )}
                                                    <div
                                                        className="flex items-center justify-between col-span-1 sm:col-span-2">
                                                        <button
                                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                            type="button"
                                                            onClick={handleBack}
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                            type="submit"
                                                            disabled={processing}
                                                        >
                                                            Salva Azienda
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (<></>)
                                        }
                                        {
                                            data.credit_rating_value === 'C' ? (
                                                <>
                                                    <div className="mb-4 col-span-1 sm:col-span-2">
                                                        <InputLabel value="Seleziona Tipo"/>
                                                        <div className="flex items-center">
                                                            <input
                                                                className="mr-2 leading-tight"
                                                                type="radio"
                                                                name="financingType"
                                                                value="noleggio"
                                                                checked={data.financingType === 'Noleggio'}
                                                                onChange={handleFinancingTypeChange}
                                                            />
                                                            <span className="text-gray-700">Noleggio</span>
                                                        </div>
                                                    </div>
                                                    {data.financingType === 'noleggio' && (
                                                        <>
                                                            <div className="mb-4">
                                                                <InputLabel htmlFor="request_noleggio"
                                                                            value="request_noleggio"/>
                                                                <textarea
                                                                    id="request_noleggio"
                                                                    name="request_noleggio"
                                                                    value={data.request_noleggio}
                                                                    onChange={(e) => setData('request_noleggio', e.target.value)}
                                                                    className="mt-1 block w-full"
                                                                    placeholder="request_noleggio"
                                                                />
                                                                {errors.request_noleggio &&
                                                                    <div
                                                                        className="text-red-600">{errors.request_noleggio}</div>}
                                                            </div>
                                                        </>
                                                    )}
                                                    <div
                                                        className="flex items-center justify-between col-span-1 sm:col-span-2">
                                                        <button
                                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                            type="button"
                                                            onClick={handleBack}
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                            type="submit"
                                                            disabled={processing}
                                                        >
                                                            Salva Azienda
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (<></>)
                                        }
                                    </>
                                )}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
        ;
}
