import React from "react";
import { Edit } from "lucide-react";
import Button from "@/components/ui/button/Button";

interface Field {
  label: string;
  value: string;
}

interface InformationCardProps {
  title: string;
  fields: Field[];
  onEdit: () => void;
}

const InformationCard: React.FC<InformationCardProps> = ({
  title,
  fields,
  onEdit,
}) => {
  return (
    <div className="border-2 border-primary rounded-lg p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Button
          onClick={onEdit}
          variant="primary"
          className="pr-2 h-12 w-32"
          iconPosition="left"
          icon={<Edit size={18} />}
        >
          Edit
        </Button>
      </div>
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={index} className="flex">
            <span className="font-bold text-gray-900 min-w-fit">
              {field.label}
            </span>
            <span className="text-gray-900 ml-1">{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationCard;
export type { Field, InformationCardProps };
