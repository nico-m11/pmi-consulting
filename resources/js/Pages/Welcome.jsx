import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f0f8ff' }}>
                <img
                    id="background"
                    className="absolute inset-0 w-full h-full object-cover"
                    src='./Images/finance.jpg'
                    alt="Background"
                />
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                        <div className="flex lg:justify-center lg:col-start-2">
                           {/* <img src='./Images/logo.png' alt="Logo" className="mx-auto"/>*/}
                           <span className="text-white font-bold text-[40px] block text-center">PMI CONSULENZA GLOBALE</span>
                        </div>
                        <nav className="-mx-3 flex flex-1 justify-end">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>

                    <main className="mt-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

                        </div>
                    </main>

                    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        PMI CONSULTING 1.0 Beta
                    </footer>
                </div>
            </div>
        </>
    );
}
