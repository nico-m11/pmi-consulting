<?php

    namespace App\Enum\UserRole;

    use App\Enum\Attributes\Type;
    use App\Enum\Attributes\Label;
    use App\Enum\Traits\Attribute;


    /**
     *
     */
    enum UserRole: int
    {
        use Attribute;

        #[Label('Amministratore')]
        #[Type('Amministratore')]
        case Amministratore = 1;

        #[Label('Agente')]
        #[Type('Agente')]
        case Agente = 2;

        #[Label('Utente')]
        #[Type('Utente')]
        case Utente = 3;
    }
