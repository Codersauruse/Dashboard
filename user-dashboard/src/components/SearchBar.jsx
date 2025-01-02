import { useRecoilState } from "recoil";
import { tempTimetableState, timetableState } from "./recoil/atom";
import { useEffect, useState } from "react";
import journeys from "../data/timetable";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [timetable, setTimeTable] = useRecoilState(timetableState);
  const [filteredTimetable, setFilteredTimetable] = useState([]);
  const [tempTimeTable, setTempTimeTable] = useRecoilState(tempTimetableState);

  useEffect(() => {
    function fetchbusses() {
      setTimeTable(journeys);
    }
    fetchbusses();
  }, [setTimeTable]);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const filterByDestination = () => {
    if (location !== "") {
      const filtered = timetable.filter(
        (journey) => journey.destination === location
      );
      setFilteredTimetable(filtered);
    } else {
      setFilteredTimetable(timetable);
    }
  };

  const filterByFactor = (factor) => {
    const tempArr = [...filteredTimetable].sort(
      (a, b) => a[factor] - b[factor]
    );
    setTempTimeTable(tempArr);
  };

  const filterby = ["price", "departureTime", "arrivalTime", "availableSeats"];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full flex items-center space-x-2">
            <input
              type="text"
              name="searchbar"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search by location"
              value={location}
              onChange={handleChange}
            />
            <button
              type="button"
              name="search-button"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={filterByDestination}
            >
              Search
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filterby.map((factor) => (
              <button
                key={factor}
                name={factor}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                onClick={() => filterByFactor(factor)}
              >
                {factor.charAt(0).toUpperCase() + factor.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
