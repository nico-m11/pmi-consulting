<?php

    namespace App\Enum\CreditSafeUrlEnum;

    use App\Enum\Attributes\Type;
    use App\Enum\Attributes\Label;
    use App\Enum\Traits\Attribute;

    /**
     *
     */
    enum CreditSafeUrl: string
    {
        use Attribute;

        #[Label('UrlAutenticazione')]
        #[Type('UrlAutenticazione')]
        case UrlAutenticazione = 'https://connect.creditsafe.com/v1/authenticate';
        #[Label('UrlCompaines')]
        #[Type('UrlCompaines')]
        case UrlCompaines = 'https://connect.creditsafe.com/v1/companies';

    }
