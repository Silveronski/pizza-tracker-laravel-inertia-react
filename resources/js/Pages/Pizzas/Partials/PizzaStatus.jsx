const statuses = [
    'Ordered',
    'Prepping',
    'Baking',
    'Checking',
    'Ready'
];

export default function PizzaStatus ({ currentStatus }) {
    const getClass = (status, index) => {
        let baseClasses = 'w-1/5 bg-gradient-to-b flex items-center justify-center h-20 border-r-2 transition-all';

        if (index === 0) { // for first status
            baseClasses += ' rounded-l-full';
        }

        if (index === (statuses.length - 1)) { // if status is ready
            baseClasses = baseClasses.replace('border-r-2', 'rounded-r-full');
        }

        if (status === currentStatus) { // the current status
            baseClasses = baseClasses.replace('border-r-2', '');
            return `${baseClasses} from-red-500 to-red-600 scale-110 rounded shadow-lg`;
        }

        if (statuses.indexOf(currentStatus) > index) { // statuses which have finished
            return `${baseClasses} from-blue-500 to-blue-600 border-blue-700`;
        }

        return `${baseClasses} from-blue-300 to-blue-400 border-blue-500`; // statuses which have not finished
    }; 

    return (
        <div className="flex border-4 border-blue-200 rounded-full">
            {statuses.map((status, index) =>
                <div key={index} className={getClass(status, index)}>
                    <p className="uppercase font-medium italic text-white drop-shadow text-center">
                        <span className="block text-3xl font-bold not-italic leading-none">{index + 1}</span>
                        {status}
                    </p>
                </div>
            )}
        </div>
    );
}