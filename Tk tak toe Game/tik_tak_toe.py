from tkinter import *
from tkinter import messagebox

class Game():
    player = 0    
    def __init__(self):
        self.grid = [[0,0,0],[0,0,0],[0,0,0]]
        self.view = [[0,0,0],[0,0,0],[0,0,0]]
        for i in range(len(self.view)):
            for j in range(len(self.view)):
                self.view[i][j] = StringVar()
        self.top = StringVar()

    def input(self):
        self.top.set("Click to start : player 1")
        l1 = Label(textvariable=self.top,font=("Arial Bold",20)).place(x=5)
        rst = Button(bg="white",text="Reset",borderwidth=2,command=self.reset).place(x=350,y=10)
        b1 = Button(bg="grey",textvariable=self.view[0][0],width=17,height=7,command=lambda:self.mark(0,0)).place(x=0,y=50)
        b2 = Button(bg="grey",textvariable=self.view[0][1],width=17,height=7,command=lambda:self.mark(0,1)).place(x=130,y=50)
        b3 = Button(bg="grey",textvariable=self.view[0][2],width=17,height=7,command=lambda:self.mark(0,2)).place(x=260,y=50)
        b4 = Button(bg="grey",textvariable=self.view[1][0],width=17,height=7,command=lambda:self.mark(1,0)).place(x=0,y=167)
        b5 = Button(bg="grey",textvariable=self.view[1][1],width=17,height=7,command=lambda:self.mark(1,1)).place(x=130,y=167)
        b6 = Button(bg="grey",textvariable=self.view[1][2],width=17,height=7,command=lambda:self.mark(1,2)).place(x=260,y=167)
        b7 = Button(bg="grey",textvariable=self.view[2][0],width=17,height=7,command=lambda:self.mark(2,0)).place(x=0,y=284)
        b8 = Button(bg="grey",textvariable=self.view[2][1],width=17,height=7,command=lambda:self.mark(2,1)).place(x=130,y=284)
        b9 = Button(bg="grey",textvariable=self.view[2][2],width=17,height=7,command=lambda:self.mark(2,2)).place(x=260,y=284)

    def reset(self):
        for i in range(len(self.view)):
            for j in range(len(self.view[0])):
                self.view[i][j].set("")    
                self.grid[i][j] = 0
        self.top.set("Click to start : player1")
        self.player=0
    
    def mark(self,x,y):
        if(self.player==0):
            if(self.view[x][y].get()!="O" and self.view[x][y].get()!="X"):
                self.view[x][y].set("O")
                self.grid[x][y] = 1
                self.top.set("Chance of player 2")
                self.player=1
                check = self.check_win(x,y,1)
                if(check):
                    self.top.set("Game Over")
                    messagebox.showinfo("Result","Hurry! Player 1 Won")
                    self.reset()
                    return 

        if(self.player==1):
            if(self.view[x][y].get()!="O" and self.view[x][y].get()!="X"):
                self.view[x][y].set("X")
                self.grid[x][y] = 2
                self.player=0
                self.top.set("Chance of player 1")
                check = self.check_win(x,y,2)
                if(check):
                    self.top.set("Game Over")
                    messagebox.showinfo("Result","Hurry! Player 2 Won")
                    self.reset()
                    return 
        
        conti=0
        for i in range(len(self.grid)):
            for j in range(len(self.grid[0])):
                if(self.grid[i][j]==0):
                    conti=1
                    break
            if(conti==1):
                break
        if(conti==0):
            self.top.set("Game Over")
            messagebox.showinfo("Result","Game Draw :\\")
            self.reset()
                    
    def check_win(self,i,j,player):
        l1 = [[0,1],[1,0],[1,1],[1,-1]]
        check = False
        for x,y in l1:
            check = self.solve(i,j,x,y,10,10,player)
            if(check==3):
                return True
        return False

    def solve(self,i,j,x,y,pre1,pre2,player):
        if(i<0 or i>=len(self.grid) or j<0 or j>=len(self.grid[0])):
            return 0
        if(self.grid[i][j]!=player):
            return 0
        if(self.grid[i][j]==player):
            a = 0
            if(x+i!=pre1 or y+j!=pre2):
                a += self.solve(i+x,j+y,x,y,i,j,player)
            if(i-x!=pre1 or j-y!=pre2):
                a += self.solve(i-x,j-y,x,y,i,j,player)
            return a+1
            

if(__name__=='__main__'):
    root = Tk()

    root.geometry("390x410")
    root.minsize(390,410)
    root.maxsize(390,410)
    c1 = Game()
    c1.input()
    root.mainloop()