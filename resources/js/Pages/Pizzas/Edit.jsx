import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdatePizzaOrderForm from './Partials/UpdatePizzaOrderForm';

const Edit = ({ auth, pizza }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {pizza.id}
                </h2>
            }
        >
            <Head title={`Order #${pizza.id}`}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                       <UpdatePizzaOrderForm pizza={pizza} className='max-w-xl'/>
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    )
}

export default Edit