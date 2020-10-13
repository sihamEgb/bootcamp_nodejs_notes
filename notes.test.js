// const { italic } = require('chalk');
// const { describe } = require('yargs');
const notes = require('./notes.js');

describe('my-notes',() => {
	it('add note succesfully', () => {
		const title = new Date().getTime();
		const body = "sss";
		notes.addNote(title,body);

		const savedNotes = notes.loadNotes();
    const note = savedNotes.find((note) => note.title === title)
		expect(title).toEqual(note.title);
	});
	it('add note already exists', () => {
		const title = new Date().getTime();
		const body = "sss";
		const body2 = "fdsfes";
		notes.addNote(title,body);
		const savedNotes = notes.loadNotes();
		
		notes.addNote(title,body2);
		const savedNotes2 = notes.loadNotes();

    const note = savedNotes.find((note) => note.title === title)
		expect(savedNotes.length).toEqual(savedNotes2.length);
	});
	it('remove note successfully', () => {
		const title = new Date().getTime();
		const body = "sss";
		notes.addNote(title,body);
		notes.removeNote(title);

		const savedNotes = notes.loadNotes();
    const note = savedNotes.find((note) => note.title === title)
		expect(undefined).toEqual(note);
	});
	it('readNote', () => {
		const title = new Date().getTime();
		const body = "sss";
	
		notes.addNote(title);
		notes.readNote(title);
	});
	it('listNotes', () => {
		const title = new Date().getTime();
		const body = "sss";
	
		notes.listNotes(title);
	});
});