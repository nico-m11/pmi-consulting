<?php

    use App\Http\Controllers\AziendeController;
    use App\Http\Controllers\PraticheController;
    use App\Http\Controllers\ProfileController;
    use Illuminate\Foundation\Application;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin'       => Route::has('login'),
            'canRegister'    => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion'     => PHP_VERSION,
        ]);
    });


    Route::middleware(['auth', 'verified'])->group(function () {
        // -----
        // DASHBOARD
        // -----
        Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

        // -----
        // USER PROFILE
        // -----
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        // -----
        // SHOP
        // -----
        Route::get('/shop', fn() => Inertia::render('Shop'))->name('shop');

        // -----
        // PREVENTIVATORE
        // -----
        Route::get('/preventivatore', fn() => Inertia::render('Preventivatore'))->name('preventivatore');

        // -----
        // AZIENDE
        // -----
        Route::get('/aziende', [AziendeController::class, 'index'])->name('aziende.index');

        // -----
        // PRATICHE
        // -----
        Route::get('/pratiche', [PraticheController::class, 'index'])->name('pratiche.index');
    });


    require __DIR__ . '/auth.php';
