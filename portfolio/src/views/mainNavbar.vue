<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reactive } from "vue";

Swiper.use([Navigation, Autoplay, Pagination]);
</script>
<template>
  <div>
    <!--1st web page-->
    <section>
      <!--1st parent element navbar-->
      <div
        class="flex w-[1240px] h-[46px] items-center px-16 space-x-15 pt-7 justify-center"
      >
        <!--first element of navbar-->
        <img src="../assets/images/first-logo.png" />
        <!--second element of navbar-->
        <div class="flex flex-row items-center space-x-2">
          <div class="ml-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            class="font-medium focus:outline-none"
          />
        </div>
        <!--third element of navbar-->
        <div class="flex items-center">
          <div>English (united States)</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--fourth element of navbar-->
        <div>
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff]"
          >
            Login
          </button>
        </div>
        <!--5th element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 text-[#8A33FD]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr class="mt-10" />
      <!--2nd parent element-->
      <div class="flex p-10">
        <!--1st child item-->
        <img class="w-[50%]" src="#" alt="sign in image" />
        <!--2nd child item-->
        <div class="w-[50%]">
          <div class="font-bold text-2xl mt-15 text-[34px]">Sign In Page</div>
          <div
            class="flex items-center border-1 border-black py-3 px-20 w-fit rounded-xl text-[#8A33FD] mt-10 w-full justify-center font-[Acme]"
          >
            <img
              src="../assets/images/Google.png"
              alt="Google"
              class="pr-2 text-[22px]"
            />Continue With Google
          </div>
          <div
            class="flex items-center border-1 border-black py-3 px-20 w-fit rounded-xl text-[#8A33FD] mt-2 w-full justify-center font-[Acme]"
          >
            <img
              src="../assets/images/twitter.png"
              alt="Twitter"
              class="pr-2 text-[22px]"
            />Continue With Twitter
          </div>
          <div class="flex flex-row mt-7 justify-between w-full items-center">
            <hr class="w-80" />
            <div class="font-[Atomic Age] text-[#666666] text-[18px]">OR</div>
            <hr class="w-80" />
          </div>
          <!--user name-->
          <div class="mt-7">
            <div class="text-[#3C4242]">User name or email address</div>
            <input
              type="text"
              class="w-full rounded-xl outline py-3 px-2 mt-1"
            />
          </div>
          <!--user password-->
          <div class="mt-3">
            <div class="w-full flex flex-row items-center justify-between">
              <div class="text-[#3C4242]">Password</div>
              <div class="flex flex-row items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="size-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06l-1.322-1.323a7.012 7.012 0 0 0 2.16-3.11.87.87 0 0 0 0-.567A7.003 7.003 0 0 0 4.82 3.76l-1.54-1.54Zm3.196 3.195 1.135 1.136A1.502 1.502 0 0 1 9.45 8.389l1.136 1.135a3 3 0 0 0-4.109-4.109Z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="m7.812 10.994 1.816 1.816A7.003 7.003 0 0 1 1.38 8.28a.87.87 0 0 1 0-.566 6.985 6.985 0 0 1 1.113-2.039l2.513 2.513a3 3 0 0 0 2.806 2.806Z"
                  />
                </svg>
                <div class="font-[Alatsi] text-[#807D7E] ml-2">Hide</div>
              </div>
            </div>
            <input
              type="text"
              class="w-full rounded-xl outline py-3 px-2 mt-1"
            />
          </div>
          <!--Forget your password-->
          <div class="w-full flex justify-end mt-1.5">
            <div class="underline">Forget your password</div>
          </div>
          <!--Sign in button-->
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff] mt-2"
          >
            Sign In
          </button>
          <div class="flex flex-row mt-1">
            <div>Don’t have an account?</div>
            <div class="underline ml-1.5">Sign up</div>
          </div>
        </div>
      </div>
    </section>
    <!--2nd web page-->
    <section>
      <!--1st parent element navbar-->
      <div
        class="flex w-[1240px] h-[46px] items-center px-16 space-x-15 pt-7 justify-center"
      >
        <!--first element of navbar-->
        <img src="../assets/images/first-logo.png" />
        <!--second element of navbar-->
        <div class="flex flex-row items-center space-x-2">
          <div class="ml-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            class="font-medium focus:outline-none"
          />
        </div>
        <!--third element of navbar-->
        <div class="flex items-center">
          <div>English (united States)</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--fourth element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 text-[#8A33FD]"
          >
            Login
          </button>
        </div>
        <!--5th element of navbar-->
        <div>
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr class="mt-10" />
      <!--2nd parent element-->
      <div class="flex p-10">
        <!--1st child item-->
        <img class="w-[50%]" src="#" alt="sign up image" />
        <!--2nd child item-->
        <div class="w-[50%]">
          <div class="font-bold text-2xl mt-15 text-[34px]">Sign Up</div>
          <div class="text-[#666666] font-[Acme]">
            Sign up for free to access to in any of our products
          </div>
          <div
            class="flex items-center border-1 border-black py-3 px-20 w-fit rounded-xl text-[#8A33FD] mt-10 w-full justify-center font-[Acme]"
          >
            <img
              src="../assets/images/Google.png"
              alt="Google"
              class="pr-2 text-[22px]"
            />Continue With Google
          </div>
          <div
            class="flex items-center border-1 border-black py-3 px-20 w-fit rounded-xl text-[#8A33FD] mt-2 w-full justify-center font-[Acme]"
          >
            <img
              src="../assets/images/twitter.png"
              alt="Twitter"
              class="pr-2 text-[22px]"
            />Continue With Twitter
          </div>

          <!--user name-->
          <div class="mt-12">
            <div class="text-[#3C4242] font-bold">Email Address</div>
            <input
              type="text"
              class="w-full rounded-xl outline py-3 px-2 mt-1"
              placeholder="designer@gmail.com"
            />
            <div class="text-[#EE1D52] mt-2 font-[Alatsi] font-bold">
              Error Message
            </div>
          </div>
          <!--user password-->
          <div class="mt-7">
            <div class="w-full flex flex-row items-center justify-between">
              <div class="text-[#3C4242]">Password</div>
              <div class="flex flex-row items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="size-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06l-1.322-1.323a7.012 7.012 0 0 0 2.16-3.11.87.87 0 0 0 0-.567A7.003 7.003 0 0 0 4.82 3.76l-1.54-1.54Zm3.196 3.195 1.135 1.136A1.502 1.502 0 0 1 9.45 8.389l1.136 1.135a3 3 0 0 0-4.109-4.109Z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="m7.812 10.994 1.816 1.816A7.003 7.003 0 0 1 1.38 8.28a.87.87 0 0 1 0-.566 6.985 6.985 0 0 1 1.113-2.039l2.513 2.513a3 3 0 0 0 2.806 2.806Z"
                  />
                </svg>
                <div class="font-[Alatsi] text-[#807D7E] ml-2">Hide</div>
              </div>
            </div>
            <input
              type="text"
              class="w-full rounded-xl outline py-3 px-2 mt-1"
            />
            <div class="text-[#807D7E] mt-2 ml-12 font-[Acme]">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
          </div>
          <!--Agree to our Terms of use and Privacy Policy -->
          <div class="flex flex-row items-center mt-6">
            <input type="checkbox" class="p-1" />
            <div class="ml-2">Agree to our Terms of use and Privacy Policy</div>
          </div>
          <div class="flex flex-row items-center mt-1.5">
            <input type="checkbox" class="p-1" />
            <div class="ml-2">Subscribe to our monthly newsletter</div>
          </div>
          <!--Sign up button-->
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff] mt-8"
          >
            Sign up
          </button>
          <div class="flex flex-row mt-1">
            <div>Already have an account?</div>
            <div class="underline ml-1.5">Log in</div>
          </div>
        </div>
      </div>
    </section>
    <!--3th web page-->
    <section>
      <!--1st parent element navbar-->
      <div
        class="flex w-[1240px] h-[46px] items-center px-16 space-x-15 pt-7 justify-center"
      >
        <!--first element of navbar-->
        <img src="../assets/images/first-logo.png" />
        <!--second element of navbar-->
        <div class="flex flex-row items-center space-x-2">
          <div class="ml-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            class="font-medium focus:outline-none"
          />
        </div>
        <!--third element of navbar-->
        <div class="flex items-center">
          <div>English (united States)</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--fourth element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 font-bold text-[#8A33FD]"
          >
            Login
          </button>
        </div>
        <!--5th element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 font-bold text-[#8A33FD]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr class="mt-10" />
      <!--2nd parent element-->
      <div class="flex p-10">
        <!--1st child item-->
        <img class="w-[50%]" src="#" alt="reset your password image" />
        <!--2nd child item-->
        <div class="w-[50%]">
          <div class="font-bold text-2xl mt-15 text-[34px]">
            Reset Your Password
          </div>
          <div class="text-[#666666] font-[Roboto] text-[16px]">
            Enter your email and we'll send you a link to reset your password.
          </div>
          <div class="text-[#666666] font-[Acme] font-bold text-[16px]">
            Please check it.
          </div>

          <!--user name-->
          <div class="mt-12">
            <div class="text-[#3C4242] font-bold">Email</div>
            <input
              type="text"
              class="w-full rounded-xl outline-[#8A33FD] border-1 border-[#8A33FD] py-3 px-2 mt-1 text-[#8A33FD] font-bold font-[Acme]"
              placeholder="focus001@gmail.com"
            />
            <div class="text-[#EE1D52] mt-2 font-[Alatsi] font-bold">
              We can not find your email.
            </div>
          </div>

          <!--Send button-->
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff] mt-8"
          >
            Send
          </button>
          <div class="flex flex-row mt-1">
            <div class="font-bold text-[16px]">Back to</div>
            <div class="underline ml-1.5 font-bold text-[16px]">Login</div>
          </div>
        </div>
      </div>
    </section>
    <!--4th web page-->
    <section>
      <!--1st parent element navbar-->
      <div
        class="flex w-[1240px] h-[46px] items-center px-16 space-x-15 pt-7 justify-center"
      >
        <!--first element of navbar-->
        <img src="../assets/images/first-logo.png" />
        <!--second element of navbar-->
        <div class="flex flex-row items-center space-x-2">
          <div class="ml-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            class="font-medium focus:outline-none"
          />
        </div>
        <!--third element of navbar-->
        <div class="flex items-center">
          <div>English (united States)</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--fourth element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 font-bold text-[#8A33FD]"
          >
            Login
          </button>
        </div>
        <!--5th element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 font-bold text-[#8A33FD]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr class="mt-10" />
      <!--2nd parent element-->
      <div class="flex p-10">
        <!--1st child item-->
        <img class="w-[50%]" src="#" alt="check email image" />
        <!--2nd child item-->
        <div class="w-[50%]">
          <div class="font-bold text-2xl mt-15 text-[34px]">Check Email</div>
          <div class="text-[#666666] font-[Acme] text-[16px] font-bold">
            Please check your email inbox and click on the provided link to
            reset your password . If you don’t receive email,
            <span class="text-[#8A33FD]">Click here to resend</span>
          </div>
          <div
            class="text-[#666666] font-[Acme] font-bold text-[16px] mt-5 flex flex-row items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-2">Back to <span class="underline">Login</span></div>
          </div>
        </div>
      </div>
    </section>
    <!--5th web page-->
    <section>
      <!--1st parent element navbar-->
      <div
        class="flex w-[1240px] h-[46px] items-center px-16 space-x-15 pt-7 justify-center"
      >
        <!--first element of navbar-->
        <img src="../assets/images/first-logo.png" />
        <!--second element of navbar-->
        <div class="flex flex-row items-center space-x-2">
          <div class="ml-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            class="font-medium focus:outline-none"
          />
        </div>
        <!--third element of navbar-->
        <div class="flex items-center">
          <div>English (united States)</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--fourth element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 font-bold text-[#8A33FD]"
          >
            Login
          </button>
        </div>
        <!--5th element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 font-bold text-[#8A33FD]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr class="mt-10" />
      <!--2nd parent element-->
      <div class="flex p-10">
        <!--1st child item-->
        <img class="w-[50%]" src="#" alt="verification image" />
        <!--2nd child item-->
        <div class="w-[50%]">
          <div class="font-bold text-2xl mt-15 text-[34px]">Verification</div>
          <div class="text-[#666666] font-[Acme] text-[16px]">
            Verify your code.
          </div>

          <!--user name-->
          <div class="mt-12">
            <div class="text-[#3C4242] font-bold">Verification Code</div>
            <input
              type="number"
              class="w-full rounded-xl outline py-3 px-2 mt-1 text-[#3C4242] font-bold font-[Acme]"
              placeholder="0757"
            />
          </div>

          <!--Verify Code button-->
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff] mt-8"
          >
            Verify Code
          </button>
        </div>
      </div>
    </section>
    <!--6th web page-->
    <section>
      <!--1st parent element navbar-->
      <div
        class="flex w-[1240px] h-[46px] items-center px-16 space-x-15 pt-7 justify-center"
      >
        <!--first element of navbar-->
        <img src="../assets/images/first-logo.png" />
        <!--second element of navbar-->
        <div class="flex flex-row items-center space-x-2">
          <div class="ml-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            class="font-medium focus:outline-none"
          />
        </div>
        <!--third element of navbar-->
        <div class="flex items-center">
          <div>English (united States)</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--fourth element of navbar-->
        <div>
          <button
            class="br-[6px] items-center px-5 py-3 rounded-xl border-black border-1 text-[#8A33FD]"
          >
            Login
          </button>
        </div>
        <!--5th element of navbar-->
        <div>
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr class="mt-10" />
      <!--2nd parent element-->
      <div class="flex p-10">
        <!--1st child item-->
        <img class="w-[50%]" src="#" alt="create new password image" />
        <!--2nd child item-->
        <div class="w-[50%]">
          <div class="font-bold text-2xl mt-15 text-[34px]">
            Create New Password
          </div>
          <div class="text-[#666666] font-[Acme]">
            Your new password must be different from previous used passwords.
          </div>

          <!--Password -->
          <div class="mt-12">
            <div class="w-full flex flex-row items-center justify-between">
              <div class="text-[#3C4242] font-bold">Password</div>
            </div>
            <div class="flex flex-row items-center w-full relative">
              <input
                type="password"
                class="w-full rounded-xl outline py-3 px-2 mt-1"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4 absolute left-170"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06l-1.322-1.323a7.012 7.012 0 0 0 2.16-3.11.87.87 0 0 0 0-.567A7.003 7.003 0 0 0 4.82 3.76l-1.54-1.54Zm3.196 3.195 1.135 1.136A1.502 1.502 0 0 1 9.45 8.389l1.136 1.135a3 3 0 0 0-4.109-4.109Z"
                  clip-rule="evenodd"
                />
                <path
                  d="m7.812 10.994 1.816 1.816A7.003 7.003 0 0 1 1.38 8.28a.87.87 0 0 1 0-.566 6.985 6.985 0 0 1 1.113-2.039l2.513 2.513a3 3 0 0 0 2.806 2.806Z"
                />
              </svg>
            </div>

            <div class="text-[#807D7E] mt-2 text-[16px] font-[Acme]">
              Must be at least 8 characters.
            </div>
          </div>
          <!--Confirm Password -->
          <div class="mt-7">
            <div class="text-[#3C4242] font-bold">Confirm Password</div>
            <input
              type="password"
              class="w-full rounded-xl outline py-3 px-2 mt-1"
            />
            <div
              class="text-[#EE1D52] text-[16px] font-[Alatsi] mt-2 font-[Alatsi] font-bold"
            >
              New password and comfirm new password do not match
            </div>
            <!---->
          </div>

          <!--Reset Password button-->
          <button
            class="br-[6px] items-center bg-[#8A33FD] px-5 py-3 rounded-xl text-[#fff] mt-8"
          >
            Reset Password
          </button>
        </div>
      </div>
    </section>
    <!--7th web page-->
    <section>
      <div > 
        <!--1st parent item navbar-->
        <div class="flex flex-row items-center justify-between px-25">
          <!--1st item of navbar-->
          <img
            src="../assets/images/logo.png"
            alt="logo"
            class="w-[223px] h-[64px]"
          />
          <!--2nd item of navbar-->
          <div class="flex flex-row items-center space-x-2">
            <div class="ml-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              class="font-medium focus:outline-none"
            />
          </div>
          <!--3th item of navbar-->
          <div class="flex flex-row gap-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              />
            </svg>
          </div>
          <!--4th item of navbar-->
          <div class="flex gap-7">
            <div
              class="flex flex-col rounded-xl p-2 items-center text-center hover:bg-[#44A4DB]"
            >
              <img
                src="../assets/images/eng.png"
                class="w-[39px] h-[39px]"
                alt="English"
              />
              <div class="mt-2">English</div>
            </div>
            <div
              class="flex flex-col rounded-xl p-2 items-center text-center hover:bg-[#44A4DB]"
            >
              <img
                src="../assets/images/tm.png"
                class="w-[39px] h-[39px]"
                alt="Turkmen"
              />
              <div class="mt-2">Turkmen</div>
            </div>
            <div
              class="flex flex-col rounded-xl p-2 items-center text-center hover:bg-[#44A4DB]"
            >
              <img
                src="../assets/images/ru.png"
                class="w-[39px] h-[39px]"
                alt="Русский"
              />
              <div class="mt-2">Русский</div>
            </div>
          </div>
        </div>
        <!--2nd parent item -->
        <div class="flex flex-row justify-between px-130 mt-7">
          <div
            class="hover:underline font-[Inter] text-[24px] hover:text-[#44A4DB]"
          >
            Main
          </div>
          <div
            class="hover:underline font-[Inter] text-[24px] hover:text-[#44A4DB]"
          >
            Brands
          </div>
          <div
            class="hover:underline font-[Inter] text-[24px] hover:text-[#44A4DB]"
          >
            Shops
          </div>
          <div
            class="hover:underline font-[Inter] text-[24px] hover:text-[#44A4DB]"
          >
            About us
          </div>
          <div
            class="hover:underline font-[Inter] text-[24px] hover:text-[#44A4DB]"
          >
            Contact
          </div>
        </div>
        <!--3th parent item -->
        <div class="w-full h-[716px] mt-5">
          <img
            src="../assets/images/banner.jpg"
            alt="banner"
            class="top-0 left-0 right-0 w-full h-full opacity-30 z-0"
          />
          <Swiper
            :slides-per-view="1"
            :loop="true"
            :autoplay="{ delay: 3000 }"
            :pagination="{ clickable: true }"
            :navigation="true"
          >
            <SwiperSlide>
              <img src="../assets/images.logo.png" alt="" />
              <img src="../assets/images.logo.png" alt="" />
              <img src="../assets/images.logo.png" alt="" />
              <img src="../assets/images.logo.png" alt="" />
              <img src="../assets/images.logo.png" alt="" />
              <img src="../assets/images.logo.png" alt="" />
              <img src="../assets/images.logo.png" alt="" />
              <img src="../assets/images.logo.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <!--4th parent item-->
        <div class="mt-15 flex flex-col justify-around">
          <!--Categories text-->
          <div class="flex flex-row justify-around">
            <div class="flex flex-row">
              <img src="../assets/images/rectangle21.png" alt="" />
              <div class="text-[34px] font-[Alatsi] ml-3">Categories</div>
            </div>

            <div class="flex flex-row items-center">
              <div class="text-[26px] font-[Alatsi]">View All</div>
              <img
                class="w-[30px] h-[11px]"
                src="../assets/images/arrow.png"
                alt=""
              />
            </div>
          </div>
          <!--Persons Swiper-->
          <div>
            <Swiper
              :slides-per-view="4"
              :loop="true"
              :autoplay="{ delay: 3000 }"
              :pagination="{ clickable: true }"
              :navigation="true"
            >
              <SwiperSlide>
                <img src="../assets/images.logo.png" alt="" />
                <img src="../assets/images.logo.png" alt="" />
                <img src="../assets/images.logo.png" alt="" />
                <img src="../assets/images.logo.png" alt="" />
                <img src="../assets/images.logo.png" alt="" />
                <img src="../assets/images.logo.png" alt="" />
                <img src="../assets/images.logo.png" alt="" />
                <img src="../assets/images.logo.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <!---->
          <hr />

          <hr />
        </div>
      </div>
    </section>
  </div>
</template>
