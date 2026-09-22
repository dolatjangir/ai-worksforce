import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

type AssessmentData = {
     fullName: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  companySize: string;
  goals: string;
}

export async function POST(request: Request){

    try{
        const body = (await request.json()) as Partial<AssessmentData>
        const fullName = String(body.fullName ?? "").trim();
        const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const industry = String(body.industry ?? "").trim();
    const companySize = String(body.companySize ?? "").trim();
    const goals = String(body.goals ?? "").trim();

    if( !fullName ||
      !email ||
      !company ||
      !phone ||
      !industry ||
      !companySize ||
      !goals
    ){
        return NextResponse.json(
            {
                success:false,
                message: "All required fields must be completed.",  
            },
            {status:400},
        );
    };
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!emailRegex.test(email)){
        return NextResponse.json(
            {
                success: false,
                message: "Please enter a valid business email."

            },
            {status:400},
        );
     };

     if(fullName.length >120){
        return NextResponse.json(
            {
                success:false,
                message:"fullname is too long"
            },
            {status:400},
        
        );
     }
      if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is too long.",
        },
        { status: 400 },
      );
    }
     if (company.length > 160) {
      return NextResponse.json(
        {
          success: false,
          message: "Company name is too long.",
        },
        { status: 400 },
      );
    }
      if (goals.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Business goals are too long.",
        },
        { status: 400 },
      );
    }
      const assessment = await prisma.assessment.create({
      data: {
        fullName,
        email,
        company,
        phone,
        industry,
        companySize,
        goals,
        status: "NEW",
      },
    });

     console.log("New AI Assessment:", assessment.id);

     return NextResponse.json(
      {
        success: true,
        message: "Assessment request submitted successfully.",
      },
      { status: 200 },
    );
  }
 catch (error) {
    console.error("Assessment API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save assessment.",
      },
      { status: 500 }
    );
  }
       
}