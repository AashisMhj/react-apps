type CompareType = {
    customization: {
        value: boolean | null,
        remarks: string | null
    },
    plugin: {
        value: boolean | null,
        remarks: string | null
    }
}

const dummyData: CompareType = {
    customization: {
        value: null,
        remarks: null
    },
    plugin: {
        value: null,
        remarks: null
    }
}


const data:{tipTap: CompareType} = {
    tipTap: {
        customization: {
            value: true,
            remarks: null
        },
        plugin: {
            value: true,
            remarks: null
        }
    }
}

type EditorTypes = keyof typeof data;
type CompareKeys = keyof CompareType;

export default function HomePage() {
    return <div className="h-screen bg-slate-300">
        <div className="min-w-80 mx-auto bg-white">
            {Object.keys(dummyData).map(key => (<div key={key}>
                <div>{key}</div>
                {
                    Object.keys(data).map((item) => {
                        return <div>{data[item as EditorTypes][key as CompareKeys].value}</div>
                    })
                }
            </div>))}
        </div>
    </div>
}