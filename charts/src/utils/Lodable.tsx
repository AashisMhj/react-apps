import { Suspense } from "react";
// eslint-disable-next-line
const Loadable = (Component: any) => (props: object) => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Component {...props} />
        </Suspense>
    )
}

export default Loadable;

