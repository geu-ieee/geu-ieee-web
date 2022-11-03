
import Card from "./Card";

function Join() {
    return (<div className="text-center">

        <div className="space-y-5 p-10">
            <h1 className="text-3xl">Join Us</h1>
            <h1 className="text-5xl font-bold">Membership</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="flex flex-row place-items-center place-content-center gap-14 p-10 flex-wrap ">
            <Card heading="Member" />
            <Card heading="Offers" />
            <Card heading="Something" />
        </div>

    </div>);
}
export default Join;