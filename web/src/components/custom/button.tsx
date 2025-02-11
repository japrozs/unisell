import React, { LegacyRef } from "react";
import { IconType } from "react-icons/lib";
import { Spinner } from "./spinner";

type ButtonProps = {
    label: string;
    className?: string;
    colored?: boolean;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    iconAnimate?: boolean;
    iconRight?: boolean;
    iconMargin?: number;
    icon?: IconType;
    roundedFull?: boolean;
    makeTextABitBigger?: boolean;
    buttonRef?: LegacyRef<HTMLButtonElement> | undefined;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({
    label,
    colored,
    color,
    disabled,
    icon: Icon,
    iconAnimate,
    loading = false,
    iconRight,
    className,
    iconMargin,
    buttonRef,
    roundedFull,
    makeTextABitBigger,
    ...props
}) => {
    return (
        <button
            disabled={disabled}
            ref={buttonRef}
            className={`${
                (loading || disabled) && "cursor-not-allowed"
            } flex  g-sans items-center justify-center group button-component ${
                colored
                    ? `${
                          color
                              ? color
                              : "bg-primary-color border-primary-color text-white"
                      } ${!disabled && "hover:opacity-90"}`
                    : "bg-black border-black text-white hover:bg-black/90"
            } focus:ring-2 ${
                disabled && "opacity-40 disabled"
            } focus:ring-border-blue-100 transition-all ${
                makeTextABitBigger ? "text-smol" : "text-sm"
            } py-1.5 w-full ${
                roundedFull ? "rounded-full" : "rounded-lg"
            } border  ${className}`}
            {...props}
        >
            {loading ? (
                <>
                    <Spinner className="w-5 h-5 text-transparent  fill-white" />
                </>
            ) : (
                <>
                    {!iconRight && (
                        <>
                            {Icon && (
                                <Icon
                                    className={`transition-all ${
                                        label.length != 0 &&
                                        `${
                                            iconAnimate
                                                ? `mr-${
                                                      iconMargin
                                                          ? iconMargin
                                                          : "1"
                                                  } group-hover:ml-${
                                                      iconMargin
                                                          ? iconMargin
                                                          : "2"
                                                  }`
                                                : `mr-2`
                                            // : `mr-${
                                            //       iconMargin
                                            //           ? iconMargin
                                            //           : "1"
                                            //   }`
                                        }`
                                    } text-lg`}
                                />
                            )}
                        </>
                    )}
                    {label}{" "}
                    {iconRight && (
                        <>
                            {Icon && (
                                <Icon
                                    className={`transition-all ${
                                        label.length != 0 &&
                                        `${
                                            iconAnimate
                                                ? `ml-${
                                                      iconMargin
                                                          ? iconMargin
                                                          : "1"
                                                  } group-hover:ml-${
                                                      iconMargin
                                                          ? iconMargin
                                                          : "2"
                                                  }`
                                                : `ml-${
                                                      iconMargin
                                                          ? iconMargin
                                                          : "1"
                                                  }`
                                        }`
                                    } text-lg`}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </button>
    );
};
