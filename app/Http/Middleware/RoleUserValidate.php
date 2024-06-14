<?php

    namespace App\Http\Middleware;

    use App\Enum\UserRole\UserRole;
    use Closure;
    use Illuminate\Http\Request;
    use Illuminate\Routing\Controllers\Middleware;
    use Symfony\Component\HttpFoundation\Response;
    use Illuminate\Support\Facades\Auth;

    class RoleUserValidate extends Middleware
    {
        /**
         * Handle an incoming request.
         *
         * @param \Closure(Request): (\Symfony\Component\HttpFoundation\Response) $next
         */
        public function handle(Request $request, Closure $next): Response
        {
            if (Auth::User()->id_user_role !== UserRole::Utente) {
                return response()->json('Opps! You do not have permission to access.');
            }
            return $next($request);
        }
    }
