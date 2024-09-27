import React from "react";
import worker1 from "../assets/worker1.png";
import worker2 from "../assets/worker2.png";
import worker3 from "../assets/worker3.png";
import worker4 from "../assets/worker4.png";
import cleamoletteicon from "../assets/cleamolette.svg";
import marteauicon from "../assets/marteau.svg";
import maisonicon from "../assets/maison.svg";
import arbreicon from "../assets/arbre.svg";

const MissionComponent = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center pt-4">NOTRE MISSION</h2>

      <div className="flex flex-wrap justify-center lg:justify-between items-center mx-auto py-10 max-w-7xl md:px-20 px-4">
        {/* Left Side (Image Grid) */}
        <div className="grid grid-cols-2 gap-4 ">
          {/* Image 1 */}
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#064d4e",
              borderTopLeftRadius: "80px",
              borderBottomRightRadius: "80px",
            }}
          >
            <img src={worker1} alt="Worker 1" className="object-cover w-full" />
          </div>
          {/* Image 2 */}
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#158F98",
              borderTopRightRadius: "80px",
              borderBottomLeftRadius: "80px",
            }}
          >
            <img src={worker2} alt="Worker 2" className="object-cover w-full" />
          </div>
          {/* Image 3 */}
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#158F98",
              borderTopRightRadius: "80px",
              borderBottomLeftRadius: "80px",
            }}
          >
            <img src={worker3} alt="Worker 3" className="object-cover w-full" />
          </div>
          {/* Image 4 */}
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#064d4e",
              borderTopLeftRadius: "80px",
              borderBottomRightRadius: "80px",
            }}
          >
            <img src={worker4} alt="Worker 4" className="object-cover w-full" />
          </div>
        </div>

        {/* Right Side (Mission Text) */}
        <div className="w-full lg:w-1/2 px-4 pt-8">
          <div className="space-y-6">
            {/* Section 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={cleamoletteicon}
                  alt="Clé à molette"
                  className="w-12 h-12 bg-teal-700 p-2 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Polyvalence et Qualité
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec erat mauris. In pellentesque luctus ante, non
                  fermentum justo aliquam ut.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={marteauicon}
                  alt="Marteau"
                  className="w-12 h-12 bg-teal-700 p-2 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Créativité et Durabilité
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec erat mauris. In pellentesque luctus ante, non
                  fermentum justo aliquam ut.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={maisonicon}
                  alt="Maison"
                  className="w-12 h-12 bg-teal-700 p-2 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Expertise et Confiance
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec erat mauris. In pellentesque luctus ante, non
                  fermentum justo aliquam ut.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={arbreicon}
                  alt="Arbre"
                  className="w-12 h-12 bg-teal-700 p-2 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Confort et Bien-être</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec erat mauris. In pellentesque luctus ante, non
                  fermentum justo aliquam ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
