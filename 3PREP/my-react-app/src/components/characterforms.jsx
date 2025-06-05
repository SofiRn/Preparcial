import React, { useState, useEffect } from 'react';
import './characterforms.css';

export default function CharacterForm({ initialData, onSubmit }) {
    const [form, setForm] = useState({ name: '', status: '', species: '' });

    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);

    return (
        <form
            className="character-form"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(form);
            }}
        >
            <input
                placeholder='Nombre'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />
            <input
                placeholder='Status'
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                required
            />
            <input
                placeholder='Species'
                value={form.species}
                onChange={(e) => setForm({ ...form, species: e.target.value })}
                required
            />
            <button type='submit'>Guardar</button>
        </form>
    );
}