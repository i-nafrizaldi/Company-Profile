import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import React from "react";

const RightSection = () => {
  return (
    <Card className="bg-[#ea1b28] text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Call Center</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="flex text-xl">
          <Phone className="mr-4 h-8 w-8" />
          (+62) 869-6969-6969
        </p>
        <p className="flex text-xl">
          <Mail className="mr-4 h-8 w-8" />
          layonair@mail.com
        </p>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Our Office</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-bold">PT. PESAT (PT. Pemuda Tersesat)</p>
        <p className="">
          Management Building, Layon Air City Soekarno-Hatta International
          Airport Tangerang 15111, Indonesia PO BOX 1004 TNG BUSH
        </p>
      </CardContent>
    </Card>
  );
};

export default RightSection;
