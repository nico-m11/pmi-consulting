<?php

    namespace App\Enum\RequestStatus;

    use App\Enum\Attributes\Type;
    use App\Enum\Attributes\Label;
    use App\Enum\Traits\Attribute;

    /**
     *
     */
    enum RequestPraticaStatus: int
    {
        use Attribute;

        #[Label('Richiesta Effettuata')]
        #[Type('richiesta_effettuata')]
        case richiesta_effettuata = 0;

        #[Label('Pending')]
        #[Type('penfing')]
        case pending = 1;


        #[Label('Accettata')]
        #[Type('accettata')]
        case accettata = 2;


        #[Label('Rifiutata')]
        #[Type('rifiutata')]
        case riufiutata = 3;
    }
