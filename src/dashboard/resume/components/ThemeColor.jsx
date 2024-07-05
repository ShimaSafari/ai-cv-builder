import React, { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "./../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function ThemeColor() {
  const colors = [
    "#de1616",
    "#ff5400",
    "#fb8500",
    "#ff595e",
    "#ff2e8c",
    "#e02a7a",
    "#27a300",
    "#1f6924",
    "#51ccd1",
    "#14746f",
    "#3890bc",
    "#147df5",
    "#8447ff",
    "#be0aff",
    "#2c4268",
    "#23233b",
  ];

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [selectedColor, setSelectedColor] = useState();
  const { resumeId } = useParams();

  const onColorSelect = (color) => {
    setSelectedColor(color);
    setResumeInfo({
      ...resumeInfo,
      themeColor: color,
    });
    const data = {
      data: {
        themeColor: color,
      },
    };
    GlobalApi.UpdateResumeDetail(resumeId, data).then((res) => {
      console.log(res);
      toast("Theme Color Updated");
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h2 className="mb-2 text-sm font-bold">Select Theme Color</h2>
        <div className="grid grid-cols-4 gap-1">
          {colors.map((item, index) => (
            <div
              onClick={() => onColorSelect(item)}
              className={`h-6 w-6 rounded-full cursor-pointer
               hover:border-slate-600 border
               ${selectedColor == item && "border-2 border-black"}
               `}
              style={{
                background: item,
              }}
            ></div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ThemeColor;