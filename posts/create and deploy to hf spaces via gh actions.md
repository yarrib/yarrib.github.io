# Creating and Deploying a Model to HuggingFace Spaces with Gradio, Fastai, and GitHub Actions

To deploy a simple app to HuggingFace spaces with Gradio we can do this directly with huggingface repos. But wouldn't it be nice to save the project to your github? Heres how

## pre work: ssh key and git lfs
- *authenticate to github with a personal access token or ssh - will show ssh*
    - [github getting started with remotes](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)
    - check if you have an existing ssh key:
        ```
        ls -al ~/.ssh
        # Lists the files in your .ssh directory, if they exist
        ```
    - then, create a new key
        ```
        ssh-keygen -t ed25519 -C "your_email@example.com"
        ```
    - name your key to be specific to github, if desired
        ```
        # you can use the default but in the event you are wokring with multiple keys this is recommended:

        >Generating public/private ed25519 key pair.
        >Enter file in which to save the key (~/.ssh/id_rsa): ~/.ssh/id_rsa_gh
    
        ```

    - ssh agent stuff....[ref](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
        - if you changed the name of your key as I did above, you'll nee to add the non-default name to the ssh-agent so it works:
        ```
        # start the ssh agent
        eval "$(ssh-agent -s)"

        # add the key
        ssh-add ~/.ssh/id_rsa_gh

        ```

    - add the key to github:
        [adding a new ssh key to gh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

        + get the ssh public key file, and copy to your clipboard:
        ```
        # use the name of the file from the previous steps
        cat ~/.ssh/id_rsa_gh.pub
        ```

- *install git-lfs in your shell, assuming you are using linux. Mac/Windows probably can do `git lfs install` and be done*



## project development
- Create a new repo on github
- clone into your development environment via ssh `git clone git@github.com:yarrib/houseplant_classifier.git`
- setup git-lfs in the repo with `git lfs install && git lfs track "*.pkl" && git add .gitattributes`
- create your project
    - steps
    - steps
    - steps
- once you are ready to push, add the files with `git add -A`
- make your commit `git commit -m "my first commit`
    
- push origin `git push origin main`
    + You might get this message on your push:
    ```
    >batch response: This repository is over its data quota. Account responsible for LFS bandwidth should purchase more data packs to >restore access.
    >error: failed to push some refs to 'github.com:yarrib/houseplant_classifier.git'
    ``
    + to fix this you can (1) pay for more storage and upgrade your account, or (2) try the following free option: [SO source](https://stackoverflow.com/questions/62905325/this-repository-is-over-its-data-quota-account-responsible-for-lfs-bandwidth-sh)
        - in Github go to the repo's settings.
        - on the main page in settings scroll down to `Archives`
        - check the box `Include Git LFS objects in archives`
        


## github actions integration
[see hf spaces docs for more reference](https://huggingface.co/docs/hub/spaces-github-actions)
