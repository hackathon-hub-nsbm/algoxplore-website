export default function RegistrationForm() {
    return (
        <div>
            <p>Register for the event</p>
            <form className="pt-9">
                <div className="flex gap-20">
                    <div className="flex flex-col">
                        <label htmlFor="teamname">Team Name</label>
                        <input className="input" type="text" id="teamname" name="teamname" placeholder="Group X" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input className="input" type="email" id="email" name="email" placeholder="example@email.com" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mobile">Mobile</label>
                        <input className="input" type="text" id="mobile" name="mobile" placeholder="07X-XXXX-XXX" />
                    </div>
                </div>
                <div className="flex flex-col pt-9">
                    <label htmlFor="member">Team Members</label>
                    <input className="input2 pt-2" type="text" id="member" name="member1" placeholder="Member 1" />
                    <input className="input2 pt-2" type="text" id="member" name="member2" placeholder="Member 2" />
                    <input className="input2 pt-2" type="text" id="member" name="member3" placeholder="Member 3" />
                    <input className="input2 pt-2" type="text" id="member" name="member4" placeholder="Member 4" />
                </div>
                <button className="btn mt-9 border p-2 text-sm border-[#38ac38] hover:bg-[#38ac38] hover:text-black" type="submit"> &gt;&gt; Register</button>
            </form>
        </div>
    )
}