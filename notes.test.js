// const { italic } = require('chalk');
// const { describe } = require('yargs');
const notes = require('./notes.js');

describe('notes-tests',() => {
	it('add note successfully', () => {
		const title = new Date().getTime();
		const body = "sss";
		notes.addNote(title,body);

		const savedNotes = notes.loadNotes();
    const note = savedNotes.find((note) => note.title === title)
		expect(title).toEqual(note.title);
	});
	it('add note already exists', () => {
		const title = new Date().getTime();
		const body1 = "sss";
		const body2 = "fdsfes";
		notes.addNote(title,body1);
		const savedNotes = notes.loadNotes();
		
		notes.addNote(title,body2);
		const savedNotes2 = notes.loadNotes();

		const note = savedNotes2.find((note) => note.title === title)
		expect(note.body).toEqual(body1);
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
	it('removeNote doesnt exist', () => {
		const title = new Date().getTime();

		const savedNotes1 = notes.loadNotes();
		notes.removeNote(title);
		const savedNotes2 = notes.loadNotes();

		expect(savedNotes1.length).toEqual(savedNotes2.length);
	});

});