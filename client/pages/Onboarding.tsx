import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C12 2 15 5 15 8.5C15 10.5 13.5 12 12 12C10.5 12 9 10.5 9 8.5C9 5 12 2 12 2ZM7 9C7 9 9 11 9 13C9 14.1 8.1 15 7 15C5.9 15 5 14.1 5 13C5 11 7 9 7 9ZM17 9C17 9 19 11 19 13C19 14.1 18.1 15 17 15C15.9 15 15 14.1 15 13C15 11 17 9 17 9ZM4 17C4 17 6 19 6 21C6 22.1 5.1 23 4 23C2.9 23 2 22.1 2 21C2 19 4 17 4 17ZM20 17C20 17 22 19 22 21C22 22.1 21.1 23 20 23C18.9 23 18 22.1 18 21C18 19 20 17 20 17Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">PetFoodCustom</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-600">
              Sign Up / Login
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Personalized Pet Nutrition
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored meals for your furry friends, delivered to your doorstep
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Customize Pet Food */}
          <Card className="text-center p-6 border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div
                className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F246568aec982492f8d1dbcdf1b0ff488)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customize Pet Food
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create personalized meal plans based on your pet's breed, age, weight, and dietary needs. Choose from premium ingredients for optimal nutrition.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  🐕 Dogs
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  🐱 Cats
                </span>

              </div>
            </CardContent>
          </Card>

          {/* Manage Subscriptions */}
          <Card className="text-center p-6 border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div
                className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F5d0443a197874ff59333d1625b6c184a)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Manage Subscriptions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Set up flexible delivery schedules that work for you. Easily pause, skip, or modify your subscription anytime through your account dashboard.
              </p>
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <span className="text-red-600 text-xs font-semibold">W</span>
                  </div>
                  <span className="text-xs text-gray-500">Weekly</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <span className="text-yellow-600 text-xs font-semibold">B</span>
                  </div>
                  <span className="text-xs text-gray-500">Bi-weekly</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <span className="text-green-600 text-xs font-semibold">M</span>
                  </div>
                  <span className="text-xs text-gray-500">Monthly</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Track Orders */}
          <Card className="text-center p-6 border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div
                className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F5ffe82e5527e45c594acbfe5e5dd90ad)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Track Orders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your deliveries in real-time and access your complete order history. Review past purchases and easily reorder your pet's favorites.
              </p>
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Order #23571</span>
                  <span className="text-green-600 font-medium">In Transit</span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Shipped</span>
                    <span>Arriving Tomorrow</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Pet Food Options */}
        <div className="mb-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Pet Food Options
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our most loved recipes crafted with premium ingredients to keep your pets healthy and happy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Food Options Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=200&h=200&fit=crop&crop=center"
                    alt="Chicken & Veggie Mix"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Chicken & Veggie Mix
                </h4>
                <p className="text-xs text-gray-500">For Dogs</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1554168046-e3173be38f39?w=200&h=200&fit=crop&crop=center"
                    alt="Salmon & Rice Blend"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Salmon & Rice Blend
                </h4>
                <p className="text-xs text-gray-500">For Cats</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1565727830114-19a7045a6ea8?w=200&h=200&fit=crop&crop=center"
                    alt="Grain-Free Turkey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Grain-Free Turkey
                </h4>
                <p className="text-xs text-gray-500">For Dogs</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1506297515101-8c8b01ffc3c3?w=200&h=200&fit=crop&crop=center"
                    alt="Tuna & Whitefish Pate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Tuna & Whitefish Pate
                </h4>
                <p className="text-xs text-gray-500">For Cats</p>
              </div>
            </div>

            {/* Pet Image */}
            <div className="lg:pl-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F0ff658e9f9d748419919ba8470a655b7?format=webp&width=800"
                alt="Happy pets with their food bowls - a golden retriever, another dog, and a cat enjoying their meals"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-lg">
              Explore PetFoodCustom
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 text-lg font-medium rounded-lg">
              Sign Up / Login
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
