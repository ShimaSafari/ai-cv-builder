import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/dummy";
import GlobalApi from "./../../../../../service/GlobalApi";

function EditResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();//remove dummy
  useEffect(() => {
    setResumeInfo(dummy);//remove line uncomment below
    // GetResumeInfo();
  }, []);

  // const GetResumeInfo = () => {
  //   GlobalApi.GetResumeById(resumeId).then((res) => {
  //     console.log(res.data.data);
  //     setResumeInfo(res.data.data);
  //   });
  // };
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
