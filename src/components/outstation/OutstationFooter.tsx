import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const OutstationFooter = () => {
  return (
    <footer className="bg-[#523826] text-white py-8 px-6 text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-[#b5892b] mb-4 font-serif">St. John of the Cross Outstation</h3>
            <p>Elebu, Ibadan, Nigeria</p>
            <p>Under Holy Trinity Catholic Church, Aba-Panu Apata</p>
          </div>
          <div>
            <h3 className="text-[#b5892b] mb-4 font-serif">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><Link to="/" className="text-white no-underline hover:underline">Main Website</Link></li>
              <li className="mb-2"><Link to="/parish" className="text-white no-underline hover:underline">Holy Trinity Parish</Link></li>
              <li className="mb-2"><a href="#mass-times" className="text-white no-underline hover:underline">Mass Times</a></li>
              <li className="mb-2"><a href="#events" className="text-white no-underline hover:underline">Events Calendar</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#b5892b] mb-4 font-serif">Resources</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-white no-underline hover:underline">Bulletin</a></li>
              <li className="mb-2"><a href="#" className="text-white no-underline hover:underline">Donations</a></li>
              <li className="mb-2"><a href="#" className="text-white no-underline hover:underline">Prayer Requests</a></li>
              <li className="mb-2"><a href="#" className="text-white no-underline hover:underline">Volunteer</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10">
          <p>&copy; 2025 St. John of the Cross Catholic Outstation, Elebu, Ibadan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
