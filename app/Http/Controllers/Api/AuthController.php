<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        // Login validacia
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {

            return response([
                'message' => 'Zadan7 email alebo heslo nie sú správne'
            ]);
        }
        
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        
        return response(compact('user', 'token'));  
    }
    public function signup(SignupRequest $request)
    {
        // Signup validacia
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $token = $user  -> createToken('main')->plainTextToken;

        return response(compact('user', 'token'));  
    }
    public function logout(Request $request)
    {
      // Logout validacia
      /** @var User $user */
      $user = $request->user();
      $user->currentAccessToken()->delete();
      return response('', 204); //fungujuca odpoved ale nie je čo vrátiť - 204
    }
}
