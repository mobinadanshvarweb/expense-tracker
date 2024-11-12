import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSelected } from "../store/slice/reminder-slice";

export default function Example() {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.reminder.selected);
  const categoies = useSelector(
    (state: RootState) => state.reminder.categories
  );
  return (
    <div className="">
      <Listbox
        value={selected}
        onChange={(category) => {
          dispatch(setSelected(category));
        }}
      >
        <div className="relative mt-1">
          <ListboxButton className="relative w-full cursor-default rounded-lg border border-darky text-darky bg-[#cfdee3ab] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selected?.name || "Select a category"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#cfdee3] py-1 text-base shadow-lg z-10  ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {categoies.map((person, personIdx) => (
                <ListboxOption
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-nonen py-2 pl-10 pr-4 ${
                      active ? "bg-darky text-lightorangy" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
