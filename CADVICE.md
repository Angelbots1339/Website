The file must be in a .obj format. It is highly recommended to use Blender or similar software with the 
model. Most of the time, straight out of cad the model has a massive file size, which doesn't work for websites. 
To optimize the model for the website using Blender:

1. Install the latest version of Blender from [here](https://www.blender.org/download/).
2. Clean up the cad file by going through and deleting or hiding small objects like screws or nuts, or objects that are hidden inside of others. 
3. Export the model as a .stl or any compatible format from the CAD Software. It has to be a single file, multiple will not work
4. `File > Import` to import this model into Blender.
5. It is a good idea to be familiar with viewport movement in Blender. It will be similar to cad software, however 
   it uses `middle-click` and `shift-middle-click` for the majority of navigation. Selecting an object with the mouse,  
   you can press `h` to hide it, and `alt-h` to unhide all objects.
6. This is somewhat optional, but if you have the experience or motivation, apply a basic texture to the robot. The
   website rendering looks different than inside Blender, so make sure to test. You can improve the color rendering by going to the scene color management options and changing it from sRGB to None
   - Because you have all the geometry in one object, You have to use some tricks
   - First, make sure you are in material preview mode so you can see the colors
   - After making several different materials, using the principled BSDF shader and nothing else (use Alpha setting for transparency, the other settings don’t work)
   - You can press tab to go into edit mode with the robot selected
   - Click on a vertex or edge or face of a part, it doesn’t really matter which. Then press ctrl-l to select everything linked to it. If too much is selected, click on the select linked all box in the bottom left and choose normal. If that still doesn't work, check to make sure those are seperate parts in onshape, if they aren't you will either have to seperate them in CAD or do it manually in blender.
   - Then, under the material tab on the right side, add a new slot or two, select the slot, then click assign (with all the vertexes for the part selected in the viewport still)
   - Then it is assigned to that slot. You can have multiple slots, and go manually assign each piece to one of the slots. Like, have one slot for polycarb, one for metal, etc. Note, the website renderer won’t show the inside of a texture, which can be a problem if you have color on the back of a piece of polycarb. You can fix this by duplicating the affected faces and extruding them a very tiny amount.
   - When you export the the object, it will create a .mtl file
   - There are a lot of settings the .mtl can’t handle (such as the metallic slider), so if it doesn’t work that slider might not get captured in the output
7. Apply a `Decimate` modifier, and ensure it is set to `Collapse`. From there, you can slide the ratio down to around
   0.2, or until the mesh is simplified enough but detail is preserved to an acceptable level. Apply this modifier when
   you are happy. Note, this can have some weird effects on the mesh, so make sure you have deleted or textured 
   everything you wish to beforehand, because this will make it harder. This step makes it much less laggy, and it may be easier to texture afterwards This modifier will also make the mesh look very strange, especially the geometry itself, but most people are unlikely to notice, and it honestly doesn't matter. Reducing file size is just so important.
8.  `File > Export` to export as an obj when you are happy with it. Remember, you can just tweak and export repeatedly if
   you want to, just replacing the previous file, to test on the site fast. Find the file and ensure there is an 
   accompanying .mtl file (this specifies the material of the object).
9.  Move the files into the correct directory, name them, and then set those paths in the json.