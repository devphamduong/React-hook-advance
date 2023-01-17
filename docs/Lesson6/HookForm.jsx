import { useForm } from 'react-hook-form';

const HookForm = (props) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(">>> check form data:", data)
    };
    console.log(">>> check render hook form");
    return (
        <div className="hook-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-group'>
                    <label>Firstname: (*)</label>
                    <input {...register("firstName", { required: true })} />
                    {errors.firstName?.type === 'required'
                        && <p className='invalid'>First name is required</p>}
                </div>
                <div className='input-group'>
                    <label>Lastname: (*)</label>
                    <input {...register("lastName", { required: true })} />
                    {errors.lastName && <p className='invalid'>Last name is required</p>}
                </div>
                <div className='input-group'>
                    <label>Email: (*)</label>
                    <input {...register("mail", { required: "Email Address is required" })} />
                    <p className='invalid'>{errors.mail?.message}</p>
                </div>

                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
export default HookForm;