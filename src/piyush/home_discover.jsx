import Discover_Card from "./discover_card";
export default function Home_Discover() {
    return (
      <div className="" >
        <div className="home_discover h-72 flex justify-center items-center my-6">
        <div>
            <div className="text-white f1">
              Discover 
            </div>
            <br/>
            <div className="text-4xl text-white f1">
            P A T O P L A C E
            </div>
        </div>
          </div>
        <div className="grid grid-cols-3 gap-5">
            <div>
                <Discover_Card/>
            </div>
            
            <div>
                <Discover_Card/>
            </div>
            
            <div>
                <Discover_Card/>
            </div>

        </div>
      </div>
    )
}
