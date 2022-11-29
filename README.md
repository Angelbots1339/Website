# Angelbotics FRC Team 1339's Website

[angelbotics.org](https://angelbotics.org)

# General Information
The `published` branch will automatically deploy to the production site. `master` is meant as the development branch,
and from there pull requests are made into `published`. The `TestWebsite` fork will deploy automatically to
[test.angelbotics.org](https://test.angelbotics.org) when any change is made to its `master` branch. 

The vast majority of content on the website is procedurally generated from JSON. This is to make it easier for people
with little programming knowledge to update the website because JSON is relatively simple.

Inside of [`/src/pages/json`](./angelbotics-website/src/pages/json) you can find all the various json files that are
used. Most utilize an array of objects, and data is displayed in the sequence of the array. Many times there are
copy-and-paste templates at the bottom of the file. To add an entry, simply add another object to the array in the order
you want. Make sure to test before deploying to the published site.

Using the mentors section of [`supporters.json`](./angelbotics-website/src/pages/json/supporters.json) as an example:

    "mentors": [
    {
        "name": "Joel Noble",
        "description": "Joel Noble is a founder, and has been the lead mentor and head coach since the team started in 2004. He plays a crucial role in keeping Angelbotics operational, and is an amazing person.",
        "imagePath": "/images/supporters/noble.JPG"
    },
    ]

To add a new mentor that gets displayed after Noble:

    "mentors": [
    {
        "name": "Joel Noble",
        "description": "Joel Noble is a founder, and has been the lead mentor and head coach since the team started in 2004. He plays a crucial role in keeping Angelbotics operational, and is an amazing person.",
        "imagePath": "/images/supporters/noble.JPG"
    },
    {
        "name": "Mentor",
        "description": "Description for the mentor",
        "imagePath": "/images/supporters/mentorImage.png"
    }
    ]

# History.json

The history section is composed of a single tab for each year. The history tabs will be displayed in the order of the
json. Ensure the array is ordered from most recent year to oldest. Make sure to test the changes using `npm start`
before committing. For all entries, leave them with blank quotes `"` if that data does not exist yet.

For Video IDs: The id of the YouTube video is used to find the video. This can be found in the url of a given video, or
through developer tools.

For Cad Models: The file must be in a .obj format. It is highly recommended to use Blender with the model. To process
the model for the website:

1. Export the model as a .stl from the CAD Software.
2. `File > Import` to import this model into Blender.
3. Go through and delete small objects like screws or nuts, or objects that are hidden inside of others. To delete,
   select an object and hit x. To make it easier, hide big objects you definitely won't delete by selecting them and
   hitting h. Press alt-h to unhide all objects.
4. Apply a `Decimate` modifier, and ensure it is set to `Collapse`. From there, you can slide the ratio down to around
   0.2, or until the mesh is simplified enough but detail is preserved to an acceptable level. Apply this modifier when
   you are happy.
5. This is somewhat optional, but if you have the experience or motivation, apply a basic texture to the robot. The
   website rendering looks different than inside Blender, so make sure to test.
6. `File > Export` to export as an obj. Find the file and ensure there is an accompanying .mtl file (this specifies the
   material of the object).
7. Move the files into the correct directory, name them, and then set those paths in the json.

- `Year:` The year for that specific tab.
- `RobotImagePath:` The path to an image of the robot. For the most part aspect ratio doesn't matter.
- `CadModelPath:` This is the path to the CAD Model for the robot. Ensure this is in .obj format. Make sure to follow
  the instructions above.
- `CadMaterialPath` This is the path to the material for the CAD Model. Ensure this is in .mtl format.
- `GameDescription:` This is a general outline for what this year's game entails. Try to make it the same length or
  similar to previous years.
- `GameName:` The given name for the FRC Game and the year: Ex: 2022 Rapid React.
- `RevealVideo:` The ID of the robot reveal video.
- `GameReveal:` The ID of the game reveal video.
- `RecapVideo:` The ID of the team's recap video for the year.
- `GithubCode:` URL for the github repository containing the competition code for the year.
- `RobotName:` The name for this year's robot.
- `YearSummary:` A very brief overview of what happened during competition season. Try to make it the same length or
  similar to previous years.

# Supporters.json

### Mentors

- `name:` Name of the mentor.
- `description:` Overview of the mentor's role on the team.
- `imagePath:` Path to a picture of the mentor.

### Sponsors

- `name:` The name of the sponsor
- `level:` There are different tiers of sponsors for our team depending on donations. This is the level.
- `logo:` This is the path to a logo for the sponsor. The logos should be horizontal, and there should be a substantial
  amount of whitespace around the logo itself for it to display nicely. Make sure to test.
- `website:` This is the url for the sponsor's website.

# Home.json

### Image Carousel

- Array of objects, each with a `url` key. This is the path to an image that will be added to the slideshow on the home
  page. The order of the objects determines the order of the slideshow.

### Entries

Each entry is displayed on its own card on the site. This is procedural, so you can create new ones.

- `name:` Name of the entry.
- `title:` Title displayed at the top of the entry card.
- `imagePath:` If there is an image, put the path here. Leave empty `""` if there is no image.
- `text:` The main text for the entry. Leave empty `""` for no text.
- `gridSpaces:` The amount of spaces horizontally this entry takes up when the device width is large. It will be 12 otherwise, which is the max.


# FirstRobotics.json

This section is not procedurally generated, so any new keys added will not show on the site. You are still able to
update the information on the original keys however.

- `firstWebsite:` The home page for FIRST.
- `firstDescription:` A general description of FIRST as an organization.

### For Each Game

- `gameVideo:` Most recent game reveal video for that competition. This will be a YouTube video ID, which can be found
  in the video's url or under developer information.
- `generalDescription:` A general description of the competition in relation to the other FRC divisions.

# Resources.json

### Contact Us

- `text:` The text that is displayed on this card.
- `email:` The main contact email for Angelbotics.

##### `Social Media[]`

This is an array of the social media platforms that are to be displayed.

- `name:` Name of the social media platform for this entry.
- `imagePath:` The path to a logo for the platform.
- `link:` A link to the team's account on that platform.


### Calendar

- `googleCalendarPublicLink:` The link to the public google calendar

### Resource Cards

- `name:` Name of the resource card.
- `description:` The text that is displayed on the resource card.
- `imagePath:` The path to the image, usually a logo, for the card.
- `url:` Most resources have an external link of some sort, and that goes here.

