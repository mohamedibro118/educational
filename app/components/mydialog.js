'use client';
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';


export default function MyModal({ isOpen, setIsOpen }) {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    function closeModal() {
        setIsOpen(false)
    }

    const router = useRouter();
    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/mail', {
                method: "POST",
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast.success('Mail sent', {
                    duration: Infinity,
                });
                reset();
                closeModal();
                router.push(`/${locale}/thankyou`);
                 
            } else {
                console.error('Mail sending failed');
                toast.error('Mail sending failed');
            }
        } catch (error) {
            console.error('Mail sending failed:', error);
            toast.error('Mail sending failed');
        }
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[10000] bg-purple text-white" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full bg-bgpurple max-w-md transform overflow-hidden rounded-2xl  p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-white"
                                    >
                                        REQUEST A SALES CALL
                                    </Dialog.Title>

                                    <form onSubmit="" className='bg-main'>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="mb-3">
                                                <label htmlFor="name">Name:</label>
                                                <input className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-secound" id="name" {...register("name", { required: "required field" })} />
                                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="email">email:</label>
                                                <input className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-secound" id="email" type="email" {...register("email")} />
                                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email">Phone:</label>
                                            <input className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-secound" id="phone"  {...register("phone", { required: "required field" })} />
                                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contactReason">Project:</label>
                                            <select className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-secound"
                                                id="contactReason" {...register("contactReason", { required: "required field" })}>
                                                <option value="">Select Project</option>
                                                <option value="hacienda west">HACIENDA WEST</option>
                                                <option value="hacienda heneish">HACIENDA HENEISH</option>
                                                <option value="badya">BADYA</option>

                                            </select>
                                            {errors.contactReason && <p className="text-red-500 text-sm">{errors.contactReason.message}</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="privacyPolicy">
                                                <input
                                                    className="mr-2"
                                                    id="privacyPolicy"
                                                    type="checkbox" {...register("privacyPolicy", { required: "Debes aceptar la política de protección de datos" })} />
                                                I have read and accept the websites data protection policy
                                            </label>
                                            {errors.privacyPolicy && <p className="text-red-500 text-sm">{errors.privacyPolicy.message}</p>}
                                        </div>

                                        <div className="mb-3">
                                            <button
                                                className="inline-flex justify-center rounded-md border border-transparent bg-secound px-5 py-2.5 text-sm font-medium text-white hover:bg-green-200 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                                type="submit"
                                                disabled={isSubmitting} // Disable the button when submitting
                                            >
                                                {isSubmitting ? "Submitting..." : "Submit"}
                                            </button>
                                        </div>
                                    </form>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Toaster closeButton richColors position="top-right" />
        </>
    )
}
