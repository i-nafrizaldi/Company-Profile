import React from "react";

interface getTestimoniProps {
  name: string;
  imageUrl: string;
  testi: string;
}

export const getTestimoni = () => {
  const result = [
    {
      name: "ivan naf",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MHwwfHx8Mg%3D%3D",
      testi: "LayonAir provides reliable and high-quality transportation solutions.",
    },
    {
      name: "nafri",
      imageUrl:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MHwwfHx8Mg%3D%3D",
      testi: "Thank you LayonAir for the outstanding flight experience.",
    },
    {
      name: "zaldi",
      imageUrl:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfDB8MHx8fDI%3D",
      testi: "LayonAir's service is exceptionally professional and efficient.",
    },
  ];
  return result;
};
