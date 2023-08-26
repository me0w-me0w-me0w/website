import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    time: "09:00",
    person: 1,
    phone: "",
  });

  const currentdate = new Date().toISOString().split("T")[0];
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const generateTimeOptions = () => {
    const startTime = 9 * 60;
    const endTime = 18 * 60;
    const interval = 30;

    const options = [];
    for (let i = startTime; i <= endTime; i += interval) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const timeString = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
      options.push(
        <option key={timeString} value={timeString}>
          {timeString}
        </option>
      );
    }
    return options;
  };

  const generatePersonOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-200 py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-5">
            <div className="text-center">
              <span className="text-red-600 font-bold text-lg">
                Reservation
              </span>
              <h3 className="text-2xl font-semibold mt-2 mb-4">Book table</h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="date"
                    defaultValue={currentdate}
                  >
                    Date
                  </label>
                  <input
                    className="border border-gray-300 rounded-lg w-full py-2 px-3"
                    type="date"
                    name="date"
                    id="date"
                    defaultValue={currentdate}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="time"
                  >
                    Time
                  </label>
                  <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="time"
                  >
                    {generateTimeOptions()}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="person"
                  >
                    Person
                  </label>
                  <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="person"
                  >
                    {generatePersonOptions()}
                  </select>
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-red-600 text-white py-3 px-6 rounded-lg text-sm transition duration-300 hover:bg-red-700"
                >
                  Book Table
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 p-5 pt-8 lg:pt-18">
            <div className="bg-cover rounded-lg h-64 lg:h-full overflow-hidden">
              <img
                src="https://preview.colorlib.com/theme/pato/images/booking-01.jpg.webp"
                alt="IMG-OUR"
                className="w-full h-full object-cover transform hover:scale-110 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
