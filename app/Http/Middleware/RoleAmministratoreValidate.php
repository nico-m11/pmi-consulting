<?php


    namespace App\Http\Middleware;

    use App\Enum\UserRole\UserRole;
    use Closure;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use Symfony\Component\HttpFoundation\Response;


    class RoleAmministratoreValidate
    {
        /**
         * Handle an incoming request.
         *
         * @param Request $request
         * @param Closure $next
         *
         * @return Response
         */
        public function handle(Request $request, Closure $next): Response
        {
            if (Auth::User()->id_user_role !== UserRole::Amministratore->value) {
                return response()->json('Opps! You do not have permission to access.', 401);
            }
            return $next($request);
        }
    }
