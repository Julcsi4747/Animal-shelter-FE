import { ReactNode } from "react";
import { Field , FieldProps} from "formik";
import BaseField from "../base-field/BaseField";
import classNames from "classnames";
import classes from "./TagField.module.scss";

interface TagFieldProps<T> {
    name: string;
    label: string;
    options: T[];
    getLabel: (item: T) => ReactNode;
}

const TagField = <T extends { id: string | number }>({
    name,
    label,
    options,
    getLabel,
    }: TagFieldProps<T>) => {
    return (
        <BaseField name={name} label={label}>
      <Field name={name} className="form-control">
        {({ form, field }: FieldProps<T[]>) => (
          <div>
            {options.map((option) => {
              const isSelected = field.value?.find(
                (item) => item.id === option.id
              );
              const handleClick = () =>
                form.setFieldValue(
                  name,
                  isSelected
                    ? field.value?.filter((item) => item.id !== option.id)
                    : [...field.value, { id: option.id }]
                );
              return (
                <span
                  key={option.id}
                  onClick={handleClick}
                  className={classNames(
                    classes.Tag,
                    "badge me-3 mb-1 p-2",
                    isSelected ? "bg-success" : "bg-light text-dark"
                  )}
                >
                  {getLabel(option)}
                </span>
              );
            })}
          </div>
        )}
      </Field>
    </BaseField>
    );
};

export default TagField;
