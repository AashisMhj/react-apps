import { useState } from "react";
//
import TipTapBulletOnly from "./examples/TipTapBulletsOnly";
import TipTapHeadingExample from "./examples/TipTapHeadingExample";
import CustomPlaceHolder from "./examples/CutomPlaceHolder"
import EditorExampleLayout from "@/layout/EditorExampleLayout";

enum ExamplesEnum {
    listExample = "list",
    heading = "heading",
    customPlaceHolder = 'custom-placeholder'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExamplesEnumValues = (Object.keys(ExamplesEnum) as Array<keyof typeof ExamplesEnum>).reduce((accumulator, current) => {
    accumulator.push(ExamplesEnum[current]);
    return accumulator;
}, [] as (typeof ExamplesEnum[keyof typeof ExamplesEnum][]));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExamplesEnumArray = (Object.keys(ExamplesEnum) as Array<keyof typeof ExamplesEnum>).reduce((accumulator, current) => {
    accumulator.push({
        key: current,
        value: ExamplesEnum[current]
    })
    return accumulator;
}, [] as Array<{
    key: keyof typeof ExamplesEnum,
    value: string
}>)

function ExampleItem({ clickHandler, label, is_active }: { clickHandler: () => void, label: string, is_active: boolean }) {
    return (
        <li onClick={clickHandler} className={`pl-6 cursor-pointer ${is_active ? "bg-blue-400 text-white": "hover:text-blue-600"}`}>
            {label}
        </li>
    )
}


export default function TipTapExamples() {
    const [selected_example, setSelectedExample] = useState(ExamplesEnum.listExample);

    const TipTapExamples = {
        [ExamplesEnum.listExample]: <TipTapBulletOnly />,
        [ExamplesEnum.heading]: <TipTapHeadingExample />,
        [ExamplesEnum.customPlaceHolder]: <CustomPlaceHolder />
    }

    return <div className="">
        <div className="h-screen w-[250px] absolute left-0">
            <nav>
                <ul className="flex flex-col mt-2">
                    <ExampleItem clickHandler={() => setSelectedExample(ExamplesEnum.listExample)} label={ExamplesEnum.listExample} is_active={selected_example === ExamplesEnum.listExample} />
                    <ExampleItem clickHandler={() => setSelectedExample(ExamplesEnum.heading)} label={ExamplesEnum.heading} is_active={selected_example === ExamplesEnum.heading} />
                    <ExampleItem clickHandler={() =>setSelectedExample(ExamplesEnum.customPlaceHolder)} label={ExamplesEnum.customPlaceHolder} is_active={selected_example === ExamplesEnum.customPlaceHolder} />
                    {
                        // TODO loop enum
                        // ExamplesEnumArray.map((el) => <li onClick={() => setSelectedExample(el.key)}>{el.value}</li>)
                    }
                </ul>
            </nav>
        </div>
        <EditorExampleLayout>
            {
                TipTapExamples[selected_example]
            }
        </EditorExampleLayout>
    </div>
}