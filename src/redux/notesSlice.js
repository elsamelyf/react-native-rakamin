import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import app from '../../firebaseConfig';

const db = getFirestore(app);

//Thunk untuk mengambil catatan dari Firestore
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const notes = querySnapshot.docs.map(doc => ({ 
        id: doc.id,
        ...doc.data(), 
    }));
    return notes;
});

// Thunk untuk menambahkan catatan baru ke Firestore
export const addNote = createAsyncThunk('notes/addNote', async (content, { dispatch }) => {
    await addDoc(collection(db, "notes"), {content});
    dispatch(fetchNotes());
    return null;
});

// Thunk untuk menghapus catatan ke Firestore
export const deleteNote = createAsyncThunk('notes/deleteNote', async (notedId, { dispatch }) => {
    await deleteDoc(doc(collection(db, "notes"), notedId));
    dispatch(fetchNotes());
    return null;
});

const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.fulfilled, (state, action) => action.payload)
            .addCase(addNote.fulfilled, (state, action) => state)
            .addCase(deleteNote.fulfilled, (state, action) => state)
},
});

export default notesSlice.reducer;