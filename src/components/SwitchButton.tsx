import { Switch } from "@headlessui/react";

interface SwitchButtonProps {
  enabled: boolean; // مقدار اولیه از بیرون
  onChange: (enabled: boolean) => void; // تابع برای تغییر وضعیت
}

export default function SwitchButton({ enabled, onChange }: SwitchButtonProps) {
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={onChange} // تغییر وضعیت توسط والد
        className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[22px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
