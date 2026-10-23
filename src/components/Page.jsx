export default function Page({ title, note, children}){
    return(
        <section className="page">
            <h1>{title}</h1>
            {note && <p className="note">{note}</p>}
            {children}

        </section>
    )
}