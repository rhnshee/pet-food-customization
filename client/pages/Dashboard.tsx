import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-orange-400 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C12 2 15 5 15 8.5C15 10.5 13.5 12 12 12C10.5 12 9 10.5 9 8.5C9 5 12 2 12 2ZM7 9C7 9 9 11 9 13C9 14.1 8.1 15 7 15C5.9 15 5 14.1 5 13C5 11 7 9 7 9ZM17 9C17 9 19 11 19 13C19 14.1 18.1 15 17 15C15.9 15 15 14.1 15 13C15 11 17 9 17 9ZM4 17C4 17 6 19 6 21C6 22.1 5.1 23 4 23C2.9 23 2 22.1 2 21C2 19 4 17 4 17ZM20 17C20 17 22 19 22 21C22 22.1 21.1 23 20 23C18.9 23 18 22.1 18 21C18Z19 20 17 20 17Z"/>
            </svg>
            <span className="text-white font-bold text-lg">PetFoodCustom</span>
          </div>

          {/* Center Search */}
          <div className="flex-1 max-w-md mx-8">
            <input
              type="text"
              placeholder="Search recipes, ingredients, or pet food..."
              className="w-full px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Pet Type Buttons */}
            <div className="flex gap-2">
              <Button size="sm" className="bg-white text-orange-400 hover:bg-gray-100 text-xs px-3 py-1 rounded-full">
                DOG
              </Button>
              <Button size="sm" className="bg-white text-orange-400 hover:bg-gray-100 text-xs px-3 py-1 rounded-full">
                CAT
              </Button>
              <Button size="sm" className="bg-white text-orange-400 hover:bg-gray-100 text-xs px-3 py-1 rounded-full">
                BIRD
              </Button>
            </div>
            
            {/* New Recipe Button */}
            <Button className="bg-white text-orange-400 hover:bg-gray-100 px-4 py-2 rounded-full">
              New Recipe
            </Button>
            
            {/* Account Button */}
            <Button className="bg-white text-orange-400 hover:bg-gray-100 px-4 py-2 rounded-full">
              Account
            </Button>
          </div>
        </div>
      </header>

      {/* Welcome Message */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, <span className="text-orange-500">human</span>!
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Here's everything you need to keep your furry friend happy and healthy.
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Max's Meal Plan */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F78d05bdd0a6f41bba49a6981ce6d2b86?format=webp&width=800"
                      alt="Max the dog"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Max's Meal Plan</h3>
                    <p className="text-gray-600">Next delivery: June 15, 2023</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-32 bg-orange-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full w-2/3"></div>
                      </div>
                      <span className="text-sm text-gray-600">65% remaining</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nutrition Overview */}
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 relative">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-red-500"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="28, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-red-500">28%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Protein</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 relative">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-green-500"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="42, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-500">42%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Carbs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 relative">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-blue-500"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="18, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-500">18%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Fats</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 relative">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-purple-500"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="12, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-purple-500">12%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Fiber</p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                Adjust Nutrition
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Pet Profile</h3>
              <p className="text-sm text-gray-600">Manage Max's details and preferences</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Food Customization</h3>
              <p className="text-sm text-gray-600">Tailor Max's meals to his needs</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Subscription Management</h3>
              <p className="text-sm text-gray-600">Adjust delivery schedule and plan</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Order History</h3>
              <p className="text-sm text-gray-600">View past orders and reorder favorites</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Meals */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Meals</h3>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              <Card className="p-4">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2Ffeba1bdf5c5e4aada3f6678f4dc097e8"
                      alt="Chicken & Vegetable Medley"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Chicken & Vegetable Medley</h4>
                    <p className="text-sm text-gray-600">Served on June 10, 2023</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Reorder</Button>
                </CardContent>
              </Card>

              <Card className="p-4">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2Fea6b48e4896e4d3b9cf7cef3e2e9e88e"
                      alt="Beef & Sweet Potato Bowl"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Beef & Sweet Potato Bowl</h4>
                    <p className="text-sm text-gray-600">Served on June 8, 2023</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Reorder</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Upcoming Delivery */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Delivery</h3>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-600">Delivery Date</p>
                      <p className="font-semibold text-gray-900">June 15, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Status</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="font-semibold text-green-600">Processing</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Tracking</p>
                    <p className="font-semibold text-gray-900">#PFC7592</p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-red-700">
                        You can modify your order up to 48 hours before delivery.
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Manage Delivery
                  </Button>

                  <button className="w-full text-sm text-gray-600 hover:text-gray-800 mt-2">
                    Skip This Delivery
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
