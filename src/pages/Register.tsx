import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const societies = [
  "Legion of Mary",
  "Sacred Heart of Jesus Society",
  "Immaculate Heart of Mary Society",
  "Pontifical Mission Societies (PMS)",
  "Altar Servers Association",
  "Choir / Singing Ministry",
  "Lay Readers / Lectors",
  "Eucharistic Ministers",
  "St. Vincent de Paul Society",
  "Caritas / Justice and Peace Commission",
  "Catholic Women Organization (CWO)",
  "Catholic Men Organization (CMO)",
  "Young Catholic Men Organization (YCMO)",
  "Catholic Youth Organization of Nigeria (CYON)",
  "Catholic Boys Organization (CBO)",
  "Catholic Girls Organization (CGO)",
  "Confraternity of the Holy Rosary",
  "Divine Mercy Society",
  "Catholic Charismatic Renewal (CCR)",
  "Knights of the Church",
  "Young Christian Worker (YCW)",
  "Saint Anne's Society",
  "Saint Patrick's Society",
  "Saint Mary's Society",
  "Saint Michael's Society",
];

export default function Register() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    location: "",
    societies: [] as string[],
    occupation: "",
    email: "",
    phone: "",
    about: "",
  });

  const handleSocietyChange = (society: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      societies: checked 
        ? [...prev.societies, society]
        : prev.societies.filter(s => s !== society)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering as a church member.",
    });
    // Reset form
    setFormData({
      name: "",
      dob: "",
      gender: "",
      location: "",
      societies: [],
      occupation: "",
      email: "",
      phone: "",
      about: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b3b57] to-[#6b2f2f] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-elegant p-8">
        <h1 className="text-4xl font-serif text-center mb-2 text-[#6b2f2f]">Church Member Registration</h1>
        <p className="text-center text-muted-foreground mb-8">Please fill in your details to register as a member.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
            <Input 
              id="name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium mb-2">Date of Birth *</label>
            <Input 
              id="dob" 
              type="date" 
              required 
              value={formData.dob}
              onChange={(e) => setFormData(prev => ({ ...prev, dob: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-2">Gender *</label>
            <Select required value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-2">Church Location *</label>
            <Select required value={formData.location} onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select your location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Parish">Parish</SelectItem>
                <SelectItem value="Outstation">Outstation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Societies (Select all that apply)</label>
            <div className="max-h-64 overflow-y-auto border rounded-md p-4 space-y-3">
              {societies.map((society) => (
                <div key={society} className="flex items-center space-x-2">
                  <Checkbox 
                    id={society}
                    checked={formData.societies.includes(society)}
                    onCheckedChange={(checked) => handleSocietyChange(society, checked as boolean)}
                  />
                  <label htmlFor={society} className="text-sm cursor-pointer">
                    {society}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="occupation" className="block text-sm font-medium mb-2">Occupation *</label>
            <Input 
              id="occupation" 
              required 
              value={formData.occupation}
              onChange={(e) => setFormData(prev => ({ ...prev, occupation: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
            <Input 
              id="email" 
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
            <Input 
              id="phone" 
              type="tel" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="about" className="block text-sm font-medium mb-2">About Me</label>
            <Textarea 
              id="about" 
              rows={5} 
              placeholder="Tell us a bit about yourself..."
              value={formData.about}
              onChange={(e) => setFormData(prev => ({ ...prev, about: e.target.value }))}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#b5892b] hover:bg-[#0b3b57] text-white py-6 text-lg"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
