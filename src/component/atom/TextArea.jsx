
const TextArea = ({placeholder,...props}) =>{
    return (
        <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-lg border border-border px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-primary"
        {...props}
        />
    )
}

export default TextArea