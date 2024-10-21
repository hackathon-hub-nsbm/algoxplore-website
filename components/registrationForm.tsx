export default function RegistrationForm() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        try {
            const result = await fetch(event.currentTarget.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });
            if (result.ok || result.status === 0) {
                window.alert('Registration Successful. Thank you for registering.');
                window.location.reload();
            } else {
                window.alert('Sorry, Something went wrong. Please try again later.');
            }
        } catch (error) {
            window.alert('Sorry, Something went wrong. Please try again later.');
        }
    };

    return (
        <div>
            <p className="text">Register for the AlgoXplore 1.0</p>
            <form className="pt-9" action="https://docs.google.com/forms/d/e/1FAIpQLScyu_WYhD3NycnjeIXOBh1YROtu8pX9T6Zp0h7ayHS-DJ91VQ/formResponse" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-20">
                    <div className="flex flex-col">
                        <label htmlFor="teamname">Team Name</label>
                        <input className="input mt-1" type="text" name="entry.663129380" placeholder="Group X" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input className="input mt-1" type="email" name="entry.1438216699" placeholder="example@email.com" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mobile">Contact Number</label>
                        <input className="input mt-1" type="text" name="entry.278976986" placeholder="07X-XXXX-XXX" required />
                    </div>
                </div>
                <div className="flex flex-col gap-6 pt-6 lg:flex-row lg:gap-20 lg:pt-9">
                    <div className="flex flex-col">
                        <label htmlFor="university">University</label>
                        <input className="input mt-1" type="text" name="entry.88928883" placeholder="NSBM" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="foodPreference">Food Preference <span className="text-xs">(Veg or Non-veg)</span></label>
                        <select className="input3 mt-1" name="entry.1489052153" required>
                            <option value="" disabled selected>Select your option</option>
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col pt-6 lg:pt-9">
                    <label htmlFor="member">Team Members Names <span className="text-xs">(To be printed on certificates)</span></label>
                    <input className="input2 mt-1" type="text" name="entry.808958187" placeholder="Member 1" required />
                    <input className="input2 mt-1" type="text" name="entry.1178906780" placeholder="Member 2" required />
                    <input className="input2 mt-1" type="text" name="entry.26362077" placeholder="Member 3" />
                    <input className="input2 mt-1" type="text" name="entry.1779595281" placeholder="Member 4" />
                </div>
                <button className="btn mt-9 border p-2 text-sm border-[#38ac38] hover:bg-[#38ac38] hover:text-black" type="submit"> &gt;&gt; Register</button>
            </form>
            <p className="text-xs pt-9"><sup>*</sup>Minimum 2 members are required to participate in the event.</p>
        </div>
    )
}
