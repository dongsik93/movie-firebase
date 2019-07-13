<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list class="pa-1">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                    <img src="data:image/jpeg;base64,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">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title style="font-size:20px;">동식님</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>fas fa-headphones</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Music</v-list-tile-title>
            </v-list-tile>

            <v-list-group prepend-icon="fas fa-film" value="true">
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>Movies</v-list-tile-title>
                    </v-list-tile>
                </template>
                <v-list-group no-action sub-group value="true">
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>Free movies</v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon>fab fa-creative-commons-nc</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </template>

                    <v-list-tile v-for="(siteIcon, i) in siteIcons" :key="i" @click="">
                        <v-list-tile-title v-text="siteIcon[0]"></v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon v-text="siteIcon[1]"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>

                <v-list-group sub-group no-action>
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>Actions</v-list-tile-title>
                        </v-list-tile>
                    </template>
                    <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="">
                        <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon v-text="crud[1]"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
            </v-list-group>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>far fa-images</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Pictures</v-list-tile-title>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>fa fa-list</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>My playlist</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>far fa-calendar-alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Recent events</v-list-tile-title>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>fas fa-cog</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Accounts settings</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>fas fa-door-open</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>logout</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
	name: 'MySidebar',
	components: {
	},
  data : () => ({
    drawer : null,
    siteIcons: [
        ['Best-sellers', 'far fa-thumbs-up'],
        ['New Movies', 'mdi-new-box'],
        ['Discounts', 'fas fa-dollar-sign'],
    ],
    cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
    ],
  }),
}
</script>
