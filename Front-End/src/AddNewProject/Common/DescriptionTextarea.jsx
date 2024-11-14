import PropTypes from 'prop-types';

export function DescriptionTextarea({ value, onChange }) {
    return (
        <div>
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-300">
                Descripcion
            </label>
            <textarea
                id="description"
                value={value}
                onChange={onChange}
                required
                placeholder="Ingrese una breve descripcion del proyecto"
                className="w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
            />
        </div>
    );
}

DescriptionTextarea.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DescriptionTextarea;