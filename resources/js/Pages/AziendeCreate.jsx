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

    const {data, setData, post, get, processing, errors} = useForm({
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
    });
    const handleSubmitVatNo = (e) => {
        e.preventDefault();
        post('/azienda-create-2');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/aziende');
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
                                    <InputLabel htmlFor="vatNo" value="Vat Number"/>
                                    <TextInput
                                        id="vatNo"
                                        name="vatNo"
                                        value={data.vatNO}
                                        onChange={(e) => setData('vatNO', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="Vat Number"
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
                                                className="mt-1 block w-full"
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
                                            <InputLabel htmlFor="postCode" value="Post Code"/>
                                            <TextInput
                                                id="postCode"
                                                name="postCode"
                                                value={data.postCode = postCode}
                                                onChange={(e) => setData('postCode', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Post Code"
                                            />
                                            {errors.postCode &&
                                                <div className="text-red-600">{errors.postCode}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="province" value="Post Code"/>
                                            <TextInput
                                                id="province"
                                                name="province"
                                                value={data.province = province}
                                                onChange={(e) => setData('province', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="province"
                                            />
                                            {errors.province &&
                                                <div className="text-red-600">{errors.province}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="city" value="city"/>
                                            <TextInput
                                                id="city"
                                                name="city"
                                                value={data.city = city}
                                                onChange={(e) => setData('city', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="city"
                                            />
                                            {errors.city && <div className="text-red-600">{errors.city}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="country" value="country"/>
                                            <TextInput
                                                id="country"
                                                name="country"
                                                value={data.country = country}
                                                onChange={(e) => setData('country', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="country"
                                            />
                                            {errors.country && <div className="text-red-600">{errors.country}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="houseNo" value="houseNo"/>
                                            <TextInput
                                                id="houseNo"
                                                name="houseNo"
                                                value={data.houseNo = houseNo}
                                                onChange={(e) => setData('houseNo', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="houseNo"
                                            />
                                            {errors.houseNo && <div className="text-red-600">{errors.houseNo}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="regNo" value="regNo"/>
                                            <TextInput
                                                id="regNo"
                                                name="regNo"
                                                value={data.regNo = regNo}
                                                onChange={(e) => setData('regNo', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="regNo"
                                            />
                                            {errors.regNo && <div className="text-red-600">{errors.regNo}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="safeNo" value="safeNo"/>
                                            <TextInput
                                                id="safeNo"
                                                name="safeNo"
                                                value={data.safeNo = safeNo}
                                                onChange={(e) => setData('safeNo', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="safeNo"
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
                                        {/*credit_rating_value: '',*/}

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_description"
                                                        value="credit_rating_description"/>
                                            <TextInput
                                                id="credit_rating_description"
                                                name="credit_rating_description"
                                                value={data.credit_rating_description = credit_rating_description}
                                                onChange={(e) => setData('credit_rating_description', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="credit_rating_description"
                                            />
                                            {errors.credit_rating_description &&
                                                <div className="text-red-600">{errors.credit_rating_description}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_limit_currency"
                                                        value="credit_rating_limit_currency"/>
                                            <TextInput
                                                id="credit_rating_limit_currency"
                                                name="credit_rating_limit_currency"
                                                value={data.credit_rating_limit_currency = credit_rating_limit_currency}
                                                onChange={(e) => setData('credit_rating_limit_currency', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="credit_rating_limit_currency"
                                            />
                                            {errors.credit_rating_limit_currency &&
                                                <div
                                                    className="text-red-600">{errors.credit_rating_limit_currency}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_limit_value"
                                                        value="credit_rating_limit_value"/>
                                            <TextInput
                                                id="credit_rating_limit_value"
                                                name="credit_rating_limit_value"
                                                value={data.credit_rating_limit_value = credit_rating_limit_value}
                                                onChange={(e) => setData('credit_rating_limit_value', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="credit_rating_limit_value"
                                            />
                                            {errors.credit_rating_limit_value &&
                                                <div
                                                    className="text-red-600">{errors.credit_rating_limit_value}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_provider_value"
                                                        value="credit_rating_provider_value"/>
                                            <TextInput
                                                id="credit_rating_provider_value"
                                                name="credit_rating_provider_value"
                                                value={data.credit_rating_provider_value = credit_rating_provider_value}
                                                onChange={(e) => setData('credit_rating_provider_value', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="credit_rating_provider_value"
                                            />
                                            {errors.credit_rating_provider_value &&
                                                <div
                                                    className="text-red-600">{errors.credit_rating_provider_value}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="credit_rating_value"
                                                        value="credit_rating_value"/>
                                            <TextInput
                                                id="credit_rating_value"
                                                name="credit_rating_value"
                                                value={data.credit_rating_value = credit_rating_value}
                                                onChange={(e) => setData('credit_rating_value', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="credit_rating_value"
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
                                                type="submit"
                                                disabled={processing}
                                            >
                                                Salva Azienda
                                            </button>

                                        </div>
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
