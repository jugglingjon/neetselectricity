# NEETS Electricity

Bootstrap 4 template for generating content for US Navy NEETS Electricity App


## Content generation process

Process for generating a new chapter html file, with proper markup.

### Assigned chapters

Within the [shared Excel spreadsheet](https://boozallen-my.sharepoint.com/:x:/g/personal/559014_bah_com/EYUZ1k9rVVBMmm0luz5NNkkBPeakNpmoFmAk9_j8E-bMPQ?e=OZSOoZ), change status assigned chapter to ACTIVE.

### New chapter html file

Create a blank html file, with the chapter number as the filename

```
2.html
```

### Copy in unformatted text

Copy in text from target chapter in the Word file into a text editor. This does not include the question/answer segments, or the feedback page that is the last page of each chatper (we are leaving the last page off, and batch processing the questions) Example:

```
Chapter 2
SAFETY AND SAFETY EQUIPMENT
No matter how small the job, safety must be practiced at all times. A tool may be efficient, essential, time-saving or even convenient; but it is also dangerous. When using any hand tool you must use it correctly, following the methods prescribed in this manual. You must also be alert for any conditions that might endanger yourself or fellow workers. Take the time necessary to acquaint yourself with the safety guidelines in this chapter. Remember, you are the most important part of safety procedures.

LEARNING OBJECTIVES
When you have completed this chapter, you will be able to do the following:
1.	State the general safety procedures for common hand tools.
2.	Identify good tool work habits.
3.	List the types of tool boxes.
4.	List the safety precautions that apply to power tools.
5.	Identify the types of personal protective equipment.
```

### Add simple markup
We want to keep the markup as simple as possible, so we'll use simple header tags, paragraph tags, ordered, and unordered lists. Our example becomes:

```
<h1>Chapter 2</h1>
<h2>SAFETY AND SAFETY EQUIPMENT</h3>
<p>No matter how small the job, safety must be practiced at all times. A tool may be efficient, essential, time-saving or even convenient; but it is also dangerous. When using any hand tool you must use it correctly, following the methods prescribed in this manual. You must also be alert for any conditions that might endanger yourself or fellow workers. Take the time necessary to acquaint yourself with the safety guidelines in this chapter. Remember, you are the most important part of safety procedures.</p>

<h3>LEARNING OBJECTIVES</h3>
<p>When you have completed this chapter, you will be able to do the following:</p>
<ol>
	<li>State the general safety procedures for common hand tools.</li>
	<li>Identify good tool work habits.</li>
	<li>List the types of tool boxes.</li>
	<li>List the safety precautions that apply to power tools.</li>
	<li>Identify the types of personal protective equipment.</li>
</ol>
```

### Headings 

Headings will be formatted:
* H1 - chapter number
* H2 - chapter title
* H3 - uppercase centered headings
* H4 - uppercase headings immediate children of h3 (left aligned)
* h5 - theoretical headings within H4 sections

### Add figures
To keep the markup as simple as possible, we will add figures dynamically, putting only the figure number and caption into markup:

```
<figure data-id="2-1" class="">Improper tool storage</figure>
```

This will output:

```
<figure data-id="2-1" class="">
	<img src="media/2-1.jpg">
	<figcaption>Figure 2-1 — Improper tool storage</figcaption>
</figure>
```

The images will be extracted from the Word file, named properly, and added to the /media folder to maintain proper links. So you don't have to worry about copying images or files.

All figures default to float:right, but you can also add bootstrap 4 content classes to the figure, to align or otherwise manipulate:

```
<figure data-id="2-1" class="float-left">Improper tool storage</figure>
```

The fullWidth class makes the figure take up the width of the container (instead of default smaller size):

```
<figure data-id="2-1" class="fullWidth">Improper tool storage</figure>
```

The large class makes the figure larger, 50% of container:

```
<figure data-id="2-1" class="large">Improper tool storage</figure>
```

### Add equations
The markup to add equations is very similar to the Figure markup, simply add an `equation` class and omit caption text:

```
<figure data-id="2-1" class="equation"></figure>
```

### Add Alerts
A number of alerts exist in the document, of different styles. Use the bootstrap 4 alert system, with an appropriate class-suffix:

```
<div class="alert alert-note">A note style alert</div>
<div class="alert alert-caution">A caution style alert</div>
<div class="alert alert-warning">A warning style alert</div>
```

The titles NOTE or CAUTION, and any accompanying icons, will be added dynamically.

### Column layouts
For columns, use the boostrap 4 grid system, the following will generate a 2x3 layout of figures:

```
<div class="row">
	<div class="col">
		<figure data-id="2-3" class="">Portable tool box</figure>
	</div>
	<div class="col">
		<figure data-id="2-4" class="">Cantilevered tray tool box</figure>
	</div>
</div>
<div class="row">
	<div class="col">
		<figure data-id="2-5" class="">Removable tray tool box</figure>
	</div>
	<div class="col">
		<figure data-id="2-6" class="">Mechanics tool box (chest type)</figure>
	</div>
</div>
<div class="row">
	<div class="col">
		<figure data-id="2-7" class="">Canvas tool bag</figure>
	</div>
	<div class="col">
		<figure data-id="2-8" class="">Five Drawer portable tool box</figure>
	</div>
</div>
```

### Tables
For tables, use the boostrap 4 table system, the following will generate a 2 column table with headings:

```
<table class="table table-striped">
	<thead>
		<tr>
			<th colspan="2" valign="top" class="text-center">Table 9-1 — Types of Brushes</th>
		</tr>
		<tr>
			<th>Type of Brush</th>
			<th>For Use On</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Flat paintbrush </td>
			<td>Large surfaces </td>
		</tr>
		<tr>
			<td>Oval sash and trim   brush </td>
			<td>Small surfaces </td>
		</tr>
		<tr>
			<td>Fitch brush </td>
			<td>Small surfaces </td>
		</tr>
		<tr>
			<td>Oval varnish brush </td>
			<td>Rough work </td>
		</tr>
		<tr>
			<td>Flat varnish brush </td>
			<td>Medium work </td>
		</tr>
		<tr>
			<td>French bristle varnish   brush </td>
			<td>High-grade work </td>
		</tr>
		<tr>
			<td>Lettering brush </td>
			<td>Small surfaces </td>
		</tr>
		<tr>
			<td>Painter&rsquo;s duster</td>
			<td>Cleaning work </td>
		</tr>
	</tbody>
</table>
```

### Viewing the files

View files from within a local webserver (XAMPP, MAMP, etc), because this generation template and final framework use AJAX, which will cause same-origin policy violations when viewed locally.

Now navigate to index.html in your local webserver, you should be able to view and proof the content. Select the chapter you're working on in the 'Chapters' menu in the blue bar at the top of the screen. This should display your content.

### Logging and continuing

Within the [shared Excel spreadsheet](https://boozallen-my.sharepoint.com/:x:/g/personal/559014_bah_com/EYUZ1k9rVVBMmm0luz5NNkkBPeakNpmoFmAk9_j8E-bMPQ?e=OZSOoZ), change status of chapter to COMPLETE, commit changes, push to repository, and continue to next assigned chapter.


### Reference

* [Chapter Progress Tracker](https://boozallen-my.sharepoint.com/:x:/g/personal/559014_bah_com/EYUZ1k9rVVBMmm0luz5NNkkBPeakNpmoFmAk9_j8E-bMPQ?e=OZSOoZ) - Excel spreadsheet we're using to share progress
* [Source NEETS Electricity Document](https://boozallen-my.sharepoint.com/:w:/g/personal/559014_bah_com/Eak6mNmW8i9AqumjKXfB-uYBCWx1b4Le66j1knXLnaZ29g?e=mR402V) - Microsoft Word Version of source document
* [Chapter 3 Equation IDs](https://boozallen-my.sharepoint.com/:w:/g/personal/559014_bah_com/EaQOUI8pwtRGlxJ9yfaqI4cBmQtEYhdLwQo_Kx5ZiJLWlA?e=FK6gxm) - Defines IDs and general boundaries of equations in chapter 3
* [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Bootstrap 4, framework used

